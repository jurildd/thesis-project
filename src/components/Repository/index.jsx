import React from 'react';
import './index.css'

class Repository extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'Type a book name or author '
        };
    }
    render() {
        let filteredData = this.props.dbInput.filter(
            (data) => {
                return data.title.indexOf(this.state.search) !== -1;
            }
        );

        return (
            <div className="">
                <div className="overflow-auto br4">
                    <table className="br4 f6 w-100 mw9 center mv3" cellSpacing="0">
                        <thead>
                            <tr className="header">
                                <th className="fw6 pl3 pr3 tl sortable" onClick= {this.props.sortBy('title')}>
                                    Title
                                    <span className={this.props.setArrow('title')}></span>
                                </th>
                                <th className="fw6 pl3 pr3 tl sortable" onClick= {this.props.sortBy('department')}>
                                    Department
                                    <span className={this.props.setArrow('department')}></span>
                                </th>
                                <th className="fw6 pl3 pr3 tl sortable" onClick= {this.props.sortBy('category')}>
                                    Category
                                    <span className={this.props.setArrow('category')}></span>
                                </th>
                                <th className="fw6 pl3 pr3 tl sortable" onClick= {this.props.sortBy('author')}>
                                    Author
                                    <span className={this.props.setArrow('author')}></span>
                                </th>
                                <th className="fw6 pl3 pr3 tl sortable" onClick= {this.props.sortBy('availability')}>
                                    Availability
                                    <span className={this.props.setArrow('availability')}></span>
                                </th>
                                <th className="fw6 pl3 pr3 tl">
                                    Link
                                </th>
                            </tr>
                        </thead>
                        <tbody className="br4 lh-copy mv3 father bg-white">
                            {
                                this.props.dbInput.map(row => (
                                    <tr className="pa4 round overflow-hidden shadow-5 ccolor">
                                        <td className="pa3 tl br-l">{row.title}</td>
                                        <td className="pa3 tl">{row.department}</td>
                                        <td className="pa3 tl">{row.category}</td>
                                        <td className="pa3 tl">{row.author}</td>
                                        <td className="pa3 tl">{row.availability}</td>
                                        <td className="pa3 tl br-r"><a href={row.link} className="link" >Download</a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Repository;