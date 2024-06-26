import React from "react";
import "/Users/michael/Documents/Projects/contactsManagement/frontend/contactmanagement/src/components/CSSTable/style.css";

const Table = ({ data }) => {
    const SequenceD = Object.keys(data[0]);
    return (
        <table className="table">
            <thead className="thead">
                <tr className="trHead">
                    {SequenceD.map((item, index) => (
                        <th className="th" key={index}>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="tbody">
                {data.map((obj, index) => (
                    <tr className="trBody" key={index}>
                        {SequenceD.map((item, index) => {
                            const value = obj[item];
                            return (
                                
                                <td className="td" key={index}>
                                    {value}
                                </td>
                                
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;