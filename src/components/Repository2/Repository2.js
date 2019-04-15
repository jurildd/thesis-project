import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./react-table-override-css.css";

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
        const columns = [
            {
                Header: "Title",
                accessor: "title"
            },
            {
                Header: "Department",
                accessor: "department"
            },
            {
                Header: "Category",
                accessor: "category"
            },
            {
                Header: "Author",
                accessor: "author"
            },
            {
                Header: "Availability",
                accessor: "availability",
                filterable: false
            },
            {
                Header: "Link",
                accessor: "link",
                sortable: false,
                filterable: false
            }
        ]
        return (
            <ReactTable
                columns={columns}
                className='react-table'
                data={this.props.dbInput}
                filterable
                resizable={false}
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
                
            >

            </ReactTable>
        )
    }
    
}

export default Repository2;