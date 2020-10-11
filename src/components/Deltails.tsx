import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import { PackageRow } from "../store/packageList/types";
import { useHistory, useParams } from "react-router-dom";
import { Header, Table, Label, Icon } from "semantic-ui-react";

const Details = () => {
    const history = useHistory();

    const { id } = useParams();
    const data = useSelector((state: AppState) => state.packages);

    // no dispatch(fetchPackageRows()), Home component already did that.
    const [packageRow, setPackageRow] = useState<PackageRow>();
    const [dependents, setDependents] = useState<PackageRow[]>([]);

    const filterPacka = (row: PackageRow, id: string) => {
        return row.id === id;
    };
    const idsEq = (id:string, id2:string) => {
        return id === id2;
    };
    const filterDeps = (row: PackageRow, id: string) => {
        let found = row.dependencies.find(pacid => idsEq(pacid,id));
        return found;
    };
    useEffect(() => {
        let prow: PackageRow[] = data.filter(pac => filterPacka(pac, id));
        let deps: PackageRow[] = data.filter(pac => filterDeps(pac, id));
        setPackageRow(prow[0]);
        setDependents(deps);
    }, [data,id]);

    const rowClicked = (id: string) => {
        history.push("/details/" + id);
    }

    const detailRows = (
        <Table.Row>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>{packageRow?.description}</Table.Cell>
        </Table.Row>
    );
    const dependencyRows = packageRow?.dependencies.map((id, index) => (
        <Table.Row onClick={() => rowClicked(id)}>
            <Table.Cell>{index === 0 && "Dependencies"}</Table.Cell>
            <Table.Cell>{id}</Table.Cell>
        </Table.Row>
    ));
    const depsCaption:string = "Depend on " + id;
    const depsRows = dependents?.map((row, index) => (
        <Table.Row onClick={() => rowClicked(row.id)}>
            <Table.Cell>{index === 0 && depsCaption}</Table.Cell>
            <Table.Cell>{row.id}</Table.Cell>
        </Table.Row>
    ));

    return (
        <div className="content">
            <Header as="h1">
                <Label as='a' size='large'
                    onClick={() => history.push("/")}>
                    <Icon name='home' size='large' /> Home
                </Label>
                <Label as='a' size='large'
                    onClick={() => history.goBack()}>
                    <Icon name='arrow up' size='large' /> Back
                </Label>
                Package: {id}
            </Header>
            <Table celled selectable>
                <Table.Body>
                    {detailRows}
                    {dependencyRows}
                    {depsRows}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Details;
