<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>A new Bill Generated!</title>
</head>
<body>
<div style="display: block; margin: 0 auto; text-align: center">
    <div class="card-header">
        <h2>Hello, {{ $customer->name }}</h2>
    </div>
    <div>
        <h3>A new bill is generated for you.</h3>
        <table border="1" style="width: 100%">
            <thead>
            <tr>
                <th scope="col" style="padding: 10px">#</th>
                <th scope="col" style="padding: 10px">Bill ID</th>
                <th scope="col" style="padding: 10px">Bill Month</th>
                <th scope="col" style="padding: 10px">Bill Year</th>
                <th scope="col" style="padding: 10px">Bill Amount</th>
                <th scope="col" style="padding: 10px">Bill Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" style="padding: 10px">1</th>
                <td style="padding: 10px">{{ $customerBill->id }}</td>
                <td style="padding: 10px">{{ $customerBill->bill_month }}</td>
                <td style="padding: 10px">{{ $customerBill->bill_year }}</td>
                <td style="padding: 10px">{{ $customerBill->amount }}</td>
                <td style="padding: 10px">{{ $customerBill->status }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</body>
</html>
