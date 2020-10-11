import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store";
import { fetchPackageRows } from "../store/packageList/actions";
import { PackageRow } from "../store/packageList/types";
import {useHistory} from "react-router-dom";
import { Header, Input, Table } from "semantic-ui-react";

const Home = () => {
    const history = useHistory();
    const [packages, setPackages] = useState<PackageRow[]>([]);
    const dispatch = useDispatch();
    const data = useSelector((state:AppState) => state.packages);
    useEffect(() => {
        dispatch(fetchPackageRows());
    }, []);
    const sortPac = (value1:PackageRow, value2:PackageRow) => {
        return value1.id > value2.id ? 1 : value1.id < value2.id ? -1 : 0;
    }
    useEffect(() => {
        setPackages(data.sort(sortPac));
    }, [data]);

    const rowClicked = (packageRow: PackageRow) => {
        history.push("/details/" + packageRow.id);
    }

    const tableHeader = () => {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Package</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        )
    }
    const tableRows = packages.map(packageRow => (
        <Table.Row 
            key={packageRow.id}
            onClick={() => rowClicked(packageRow)}
        >
            <Table.Cell>{packageRow.id}</Table.Cell>
            <Table.Cell>{packageRow.description}</Table.Cell>
        </Table.Row>
    ))
    return (
        <div className="content">
            <Header as="h1" className="page-title">Packages</Header>
            <Table celled selectable>
                {tableHeader}
                <Table.Body>{tableRows}</Table.Body>
            </Table>
        </div>
    )
};

export default Home;
