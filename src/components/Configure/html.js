export const htmlStr = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 97%;
    }

    body {
        padding: 0 50px;
    }

    .dfl {
        display: flex;
    }

    .jb {
        justify-content: space-between;
    }

    .jc {
        justify-content: center;
    }

    .ic {
        align-items: center;
    }

    .is {
        align-items: flex-start;
    }

    .upc {
        text-transform: uppercase;
    }

    .theader {
        border-top: 1px solid #a6a6a6;
        border-bottom: 1px solid #a6a6a6;
        padding: 10px 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        font-weight: bold;
        align-items: center;
    }
</style>

<body>
    <div class="dfl is jb">
        <div>
            RW Luxury LTD, <br>
            85 Great Portland street, <br>
            First Floor, <br>
            London, W1W 7LT
            <br><br>
            ___________
        </div>
        <div>
            <p>
                Invoice ref number: <span style="margin-left: 20px;">2030001</span>
            </p>
            <p style="margin-top: 5px;">
                Invoice date: <span style="margin-left: 20px;">Sep 1, 2023</span>
            </p>
            <p style="margin-top: 5px;">
                Invoice amount: <span style="margin-left: 20px;">500 (GBP)</span>
            </p>
        </div>
    </div>

    <div style="margin-top: 30px; margin-bottom: 10px;">
        <h5 class="upc">billed to</h5> <br>
        <p>
            Name of client <br>
            Address of client
        </p>
    </div>

    <div class="theader">
        <div style="width: 30%;" class="upc">
            description
        </div>

        <div style="width: 30%;" class="upc dfl jb">

            <div style="width: 30%; text-align: center;" class="upc">UNITS</div>
            <div style="width: 30%; text-align: center;" class="upc">UNIT PRICE</div>
            <div style="width: 30%; text-align: center;" class="upc">AMOUNT (GBP)</div>
        </div>
    </div>

    <div style="border: none; margin-top: 10px; font-weight: normal;" class="theader">
        <div style="width: 20%;">
            DATEJUST OYSTER,41 mm <br> <br>
            The Brushed <br> <br>
            Diamond Double Row
        </div>

        <div style="width: 30%;" class="upc dfl jb">

            <div style="width: 30%; text-align: center;" class="upc">1</div>
            <div style="width: 30%; text-align: center;" class="upc">49</div>
            <div style="width: 30%; text-align: center;" class="upc">49</div>
        </div>
    </div>

    <div style="border: none; margin-top: 10px; font-weight: normal;" class="theader">
        <div style="width: 20%;">
            Extra strap blue
        </div>

        <div style="width: 30%;" class="upc dfl jb">

            <div style="width: 30%; text-align: center;" class="upc">1</div>
            <div style="width: 30%; text-align: center;" class="upc">49</div>
            <div style="width: 30%; text-align: center;" class="upc">49</div>
        </div>
    </div>


</body>

</html>`