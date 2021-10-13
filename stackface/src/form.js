import { useState } from "react";
import React from "react";
import { Button } from "bootstrap";

export default function StackForm(props) {


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.formHandler(inputs);
    }


    var form =
        <form onSubmit={handleSubmit}>

            <table
            className="table">
                <tbody>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Query </label>
                                        </td>

                                        <td>
                                            <input
                                                name="q"
                                                type="text"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                 </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Body </label>
                                        </td>

                                        <td>
                                            <input
                                                name="body"
                                                type="text"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Title </label>
                                        </td>

                                        <td>
                                            <input
                                                name="title"
                                                type="text"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>



                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Url </label>
                                        </td>

                                        <td>
                                            <input
                                                name="url"
                                                type="text"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Tagged </label>
                                        </td>

                                        <td>
                                            <input
                                                name="tagged"
                                                type="text"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Page </label>
                                        </td>

                                        <td>
                                            <input
                                                name="page"
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Pagesize </label>
                                        </td>

                                        <td>
                                            <input
                                                name="pagesize"
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Answers </label>
                                        </td>

                                        <td>
                                            <input
                                                name="answers"
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> User </label>
                                        </td>

                                        <td>
                                            <input
                                                name="user"
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Views </label>
                                        </td>

                                        <td>
                                            <input
                                                name="views"
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Fromdate </label>
                                        </td>

                                        <td>
                                            <input
                                                name="fromdate"
                                                type="date"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Todate </label>
                                        </td>

                                        <td>
                                            <input
                                                name="todate"
                                                type="date"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Min. </label>
                                        </td>

                                        <td>
                                            <input
                                                name="min"
                                                type="date"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Max. </label>
                                        </td>

                                        <td>
                                            <input
                                                name="max"
                                                type="date"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> order </label>
                                        </td>

                                        <td>
                                            <select name="order" value="desc" onChange={handleChange}>
                                                <option value="desc">Descending</option>
                                                <option value="asc">Ascending</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>



                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Sort </label>
                                        </td>

                                        <td>
                                            <select name="Sort"  value="desc" onChange={handleChange}>
                                                <option value="activity">Activity</option>
                                                <option value="votes">Votes</option>
                                                <option value="creation">Creation</option>
                                                <option value="releavance">Releavance</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Accepted </label>
                                        </td>

                                        <td>
                                            <select name="accepted" onChange={handleChange}>
                                                <option value=""> </option>
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Closed </label>
                                        </td>

                                        <td>
                                            <select name="closed" onChange={handleChange}>
                                                <option value=""> </option>
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Migrated </label>
                                        </td>

                                        <td>
                                            <select name="migrated" onChange={handleChange}>
                                                <option value=""> </option>
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>


                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Wiki </label>
                                        </td>

                                        <td>
                                            <select name="wiki" onChange={handleChange}>
                                                <option value=""> </option>
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Notice </label>
                                        </td>

                                        <td>
                                            <select name="notice" onChange={handleChange}>
                                                <option value=""> </option>
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label> Nottagged </label>
                                        </td>

                                        <td>
                                            <input
                                                name="nottagegd"
                                                type="text"
                                                className="form-control form-control-sm"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td></td>

                        <td>
                            <button type="submit" className="btn btn-primary">Search questions</button>
                        </td>

                    </tr>
                </tbody>
            </table>

        </form>;

    return form;
}
