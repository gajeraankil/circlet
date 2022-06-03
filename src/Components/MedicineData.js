import React from 'react'

const MedicineData = () => {

    let medicineData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ];

    let fMedicineData = medicineData.filter(v => v.status === true && v.expiry >= 2022);
    let totalPrice = fMedicineData.reduce((a, c) => a + c.price, 0);

    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <table className="table text-center table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Expiry</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fMedicineData.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">{v.id}</th>
                                                <td>{v.name}</td>
                                                <td>{v.quantity}</td>
                                                <td>{v.price}</td>
                                                <td>{v.expiry}</td>
                                                <td>{v.status.toString()}</td>
                                                {
                                                    i === 0 ? <td className='align-middle' rowSpan={fMedicineData.length}>{totalPrice}</td> : null
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

export default MedicineData