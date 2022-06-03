import React from 'react'

const EmployeeData = () => {

    let employeeData = [
        {
            name: "amit",
            age: 35,
            salary: 40000,
            bonus: 1000,
            status: true
        },
        {
            name: "ajay",
            age: 25,
            salary: 38000,
            bonus: 2000,
            status: false
        },
        {
            name: "mayur",
            age: 23,
            salary: 50000,
            bonus: 500,
            status: true
        },
        {
            name: "jay",
            age: 29,
            salary: 35000,
            bonus: 600,
            status: true
        },
        {
            name: "raj",
            age: 33,
            salary: 22000,
            bonus: 2000,
            status: true
        },
    ]

    let fEmployeeData = employeeData.filter(v => v.status === true);
    let totalPrice = fEmployeeData.reduce((a, c) => a + c.salary + c.bonus, 0);

    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <table className="table text-center table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Bonus</th>
                                    <th scope="col">Total Salary</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total Expenses</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fEmployeeData.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">{v.name}</th>
                                                <td>{v.age}</td>
                                                <td>{v.salary}</td>
                                                <td>{v.bonus}</td>
                                                <td>{v.salary + v.bonus}</td>
                                                <td>{v.status.toString()}</td>
                                                {
                                                    i === 0 ? <td className='align-middle' rowSpan={fEmployeeData.length}>{totalPrice}</td> : null
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmployeeData