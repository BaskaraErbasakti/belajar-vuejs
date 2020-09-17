<template>
    <div class="container-fluid">
        <div class="row d-flex flex-row shadow-sm py-3">
            <div class="col-1 justify-content-center align-items-center">
                <button type="button" class="btn">
                    <img src="@/assets/menu.png" alt="menu">
                </button>
            </div>
            <div class="col justify-content-center align-items-center text-center">
                <h1>History</h1>
            </div>
        </div>
        <div class="row d-flex">
            <aside class="col-1 d-flex flex-column justify-content-start align-items-center shadow-sm py-4">
                <a href="https://baskom-tempur.netlify.app/">
                    <img class="py-4" src="@/assets/fork.png" alt="fork">
                </a>
                <img class="py-4" src="@/assets/clipboard.png" alt="clipboard">
                <img class="py-4" src="@/assets/add.png" alt="add">
            </aside>
            <main class="col-11 d-flex flex-column">
                <div class="conclusion d-flex pl-4 py-4 height-213">
                    <div class="col d-flex flex-column pink mx-4 pl-4 justify-content-center align-items-start">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse1">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse2">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse3">
                        <p>Today’s Income</p>
                        <h1 class="font-25">Rp. 1.000.000</h1>
                        <p>+2% Yesterday</p>
                    </div>
                    <div class="col d-flex flex-column blue mx-4 pl-4 justify-content-center align-items-start">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse1">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse2">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse3">
                        <p>Orders</p>
                        <h1 class="font-25">3.270</h1>
                        <p>+5% Last Week</p>
                    </div>
                    <div class="col d-flex flex-column purple mx-4 pl-4 justify-content-center align-items-start">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse1">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse2">
                        <img src="@/assets/Ellipse 1.png" alt="ellipse" class="ellipse3">
                        <p>This Year’s Income</p>
                        <h1 class="font-25">Rp. 100.000.000.000</h1>
                        <p>+10% Last Yeark</p>
                    </div>
                </div>
                <div class="statistic d-flex flex-column ml-4 my-2 py-2">
                    <div class="row mx-0 d-flex justify-content-between">
                        <h1 class="font-25 mx-3 my-3">Revenue</h1>
                        <div class="dropdown mx-4 my-3">
                            <button class="btn dropdown-toggle month font-15" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Month
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Years</a>
                                <a class="dropdown-item" href="#">Weeks</a>
                                <a class="dropdown-item" href="#">Days</a>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-0">
                        <div class="col d-flex mb-2">
                            <p class="mb-3 mr-3 font-15 text-secondary">50k</p>
                            <div class="mb-3">
                                <img src="@/assets/Line 1.png" alt="line" >
                            </div>
                        </div>    
                        <div class="col d-flex mb-2">
                            <p class="mb-3 mr-3 font-15 text-secondary">40k</p>
                            <div class="mb-3">
                                <img src="@/assets/Line 1.png" alt="line" >
                            </div>
                        </div>    
                        <div class="col d-flex mb-2">
                            <p class="mb-3 mr-3 font-15 text-secondary">30k</p>
                            <div class="mb-3">
                                <img src="@/assets/Line 1.png" alt="line" >
                            </div>
                        </div>    
                        <div class="col d-flex mb-2">
                            <p class="mb-3 mr-3 font-15 text-secondary">20k</p>
                            <div class="mb-3">
                                <img src="@/assets/Line 1.png" alt="line" >
                            </div>
                        </div>    
                        <div class="col d-flex mb-2">
                            <p class="mb-3 mr-3 font-15 text-secondary">10k</p>
                            <div class="mb-3">
                                <img src="@/assets/Line 1.png" alt="line" >
                            </div>
                        </div>    
                        <div class="col d-flex mb-2">
                            <p class="mb-3 mr-3 font-15 text-secondary">0</p>
                            <div class="mb-3">
                                <img src="@/assets/Line 1.png" alt="line" >
                            </div>
                        </div>
                    </div>
                    <div class="row mx-0 d-flex justify-content-center align-items-center">
                        <div class="round-blue"></div>
                        <p class="my-0 mx-2">This Month</p>
                        <div class="round-pink"></div>
                        <p class="my-0 mx-2">Last Month</p>
                    </div>
                    <img src="@/assets/Vector 1.png" alt="vector1" class="vector-biru">
                    <img src="@/assets/Vector 2.png" alt="vector2" class="vector-pink">
                </div>
                <div class="recent-order d-flex flex-column ml-4 my-2 py-2">
                    <div class="row mx-0 d-flex justify-content-between">
                        <h1 class="font-25 mx-3 my-3">Recent Order</h1>
                        <div class="dropdown mx-4 my-3">
                            <button class="btn dropdown-toggle month font-15" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Today
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Yesterday</a>
                                <a class="dropdown-item" href="#">Weeks ago</a>
                                <a class="dropdown-item" href="#">Months ago</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col d-flex justify-content-around">
                            <div class="col">
                                <h1 class="font-15">INVOICES</h1>
                            </div>
                            <div class="col">
                                <h1 class="font-15">CASHIER</h1>
                            </div>
                            <div class="col">
                                <h1 class="font-15">DATE</h1>
                            </div>
                            <div class="col">
                                <h1 class="font-15">ORDERS</h1>
                            </div>
                            <div class="col">
                                <h1 class="font-15">AMOUNT</h1>
                            </div>
                        </div>
                        <div class="col">
                            <img src="@/assets/Line 7.png" alt="long-line">
                        </div>
                        <div class="col d-flex justify-content-around text-secondary">
                            <div class="col">
                                <p>#10928</p>
                            </div>
                            <div class="col">
                                <p>Cashier 1</p>
                            </div>
                            <div class="col">
                                <p>06 October 2019</p>
                            </div>
                            <div class="col">
                                <p>Ice Tea, Salad With peanut sauce</p>
                            </div>
                            <div class="col">
                                <p>Rp. 120.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: "history"
}
</script>

<style scoped>

body {
    font-family: Airbnb Cereal App;
}

.font-25 {
    font-size: 25px;
}

.font-20 {
    font-size: 20px;
}

.font-15 {
    font-size: 15px;
}

.font-10 {
    font-size: 10px;
}

.pink {
    background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    border-radius: 10px;
    width: 400px;
}

.blue {
    background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
    border-radius: 10px;
    width: 400px;
}

.purple {
    background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
    border-radius: 10px;
    width: 400px;
}

.ellipse1 {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 293px;
    top: 12px;
    background: rgba(253, 211, 228, 0.2);
    border-radius: 100%;
}

.ellipse2 {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 265px;
    top: 26px;
    background: rgba(253, 211, 228, 0.2);
    border-radius: 100%;
}

.ellipse3 {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 215px;
    top: 53px;
    background: rgba(253, 211, 228, 0.2);
    border-radius: 100%;
}

.height-213 {
    height: 213px;
}

.statistic {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.month {
    background-color: #CECECE;
    border-radius: 10px;
}

.dropdown {
    right: 100px;
}

.line {
    height: 24px;
}

.round-blue {
    border-radius: 100%;
    background-color: #00F1FF;
    height: 10px;
    width: 10px;
    text-align: center;
}

.round-pink {
    border-radius: 100%;
    background-color:#FFB8C6;
    height: 10px;
    width: 10px;
    text-align: center;
}

.vector-biru {
    position: absolute;
    top: 300px;
    left: 94px;
    width: 1140px;
    height: 240px;
}

.vector-pink {
    position: absolute;
    top: 300px;
    left: 94px;
    width: 1140px;
    height: 240px;
}

.recent-order {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}



</style>