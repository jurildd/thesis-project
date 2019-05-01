import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./react-table-override-css.css";
import {Route} from 'react-router-dom';

class Repository2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            select2: undefined
        };
    }

    onFilteredChangeCustom = (value, accessor) => {
        let filtered = this.state.filtered;
        let insertNewFilter = 1;
    
        if (filtered.length) {
          filtered.forEach((filter, i) => {
            if (filter["id"] === accessor) {
              if (value === "" || !value.length) filtered.splice(i, 1);
              else filter["value"] = value;
    
              insertNewFilter = 0;
            }
          });
        }
    
        if (insertNewFilter) {
          filtered.push({ id: accessor, value: value });
        }
    
        this.setState({ filtered: filtered });
    };

    render() {
        const getColumnWidth = (data, accessor, headerText) => {
            if (typeof accessor === 'string' || accessor instanceof String) {
              accessor = d => d[accessor]; // eslint-disable-line no-param-reassign
            }
            const maxWidth = 600;
            const magicSpacing = 80;
            const cellLength = Math.max(
              ...data.map(row => (`${accessor(row)}` || '').length),
              headerText.length,
            );
            return Math.min(maxWidth, cellLength * magicSpacing);
        };
        return (
            <ReactTable
                data={this.props.dbInput}
                columns={[
                    {
                        Header: "id",
                        accessor: "id",
                        show: false
                    },
                    {
                        Header: "Title",
                        accessor: "title",
                        width: getColumnWidth(this.props.dbInput,'accessor', "Title"),
                        style:{ 'white-space': 'unset'}
                    },
                    {
                        Header: "Department",
                        accessor: "department",
                        style: {'text-align': 'center'}
                    },
                    {
                        Header: "Category",
                        accessor: "category",
                        style: {'text-align': 'center'}
                    },
                    {
                        Header: "Author",
                        accessor: "author",
                        style: {'text-align': 'center'}
                    },
                    {
                        Header: "Availability",
                        accessor: "availability",
                        filterable: false,
                        style: {'text-align': 'center'}
                    },
                    {
                        Header: "Link",
                        accessor: "link",
                        sortable: false,
                        filterable: false,
                        style: {'text-align': 'center'}
                    }
                ]}
                className='react-table' 
                filterable
                resizable={true}
                filtered={this.state.filtered}
                onFilteredChange={(filtered, column, value) => {
                    this.onFilteredChangeCustom(value, column.id || column.accessor);
                }}
                defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id;
                    if (typeof filter.value === "object") {
                    return row[id] !== undefined
                        ? filter.value.indexOf(row[id]) > -1
                        : true;
                    } else {
                    return row[id] !== undefined
                        ? String((row[id]).toLowerCase()).indexOf((filter.value).toLowerCase()) > -1
                        : true;
                    }
                }}
                NoDataComponent={() => null}
                getTableProps={() => {
                    return {
                        className: "br4 f6 w-100 mw9 center mv3 pt5",
                        cellSpacing: "0", 
                    }
                }}
                getTheadThProps={() => {
                    return {
                        className: "fw6 pl3 pr3 pa3 sortable"
                    }
                }}
                getTheadTrProps={() => {
                    return {
                        className: "header"
                    }
                }}
                getTbodyProps={() => {
                    return {
                        className: "br4 lh-copy mv3 father"
                    }
                }}
                getTrGroupProps={() => {
                    return {
                        className: "pa3 round overflow-hidden ccolor mv2 bg-white"
                    }
                }}
                getTdProps={() => {
                    return {
                        className: "pa3 tl br-l br-r"
                    }
                }}
                getPaginationProps={() => {
                    return {
                        className: "fw6 mw9 center header"
                    }
                }}
                getTrProps={(state, rowInfo, column, instance) => {
                    return {
                        // <Route render={({history}) => {
                        //     onClick={() => history.push('repository/' + rowInfo.row.id)}    
                        // }}
                        onClick: e => {
                            window.location.href = "repository/" + rowInfo.row.id
                            // console.log(rowInfo.row.id)
                        },
                        style: {'cursor': 'pointer'}
                        
                    }
                    
                }}
                
            >

            </ReactTable>
        )
    }
    
}

export default Repository2;