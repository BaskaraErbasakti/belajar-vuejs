<template>
<div class="home">
    <div id="parent" class="container-fluid">
        <div class="row sticky-top bg-white">
            <header class="col-8 d-flex justify-content-between align-items-center shadow-sm py-4 rounded">
                <button type="button" class="btn">
                    <img class="ml-4 img-fluid" src="@/assets/menu.png" width="35px" height="35px" alt="menu-list">
                </button>
                <button type="button" class="btn m-0" data-toggle="collapse" href="#empty">
                    <h1 class="tittle">Food Items</h1>
                </button>            
                <form v-on:submit="search"><input type="text" class="form-control" id="searching" v-model="form.name"><button class="btn" type="submit" >Search</button></form>
            </header>
        <div class="col-4 d-flex justify-content-center align-items-center shadow-sm py-4">
          <h1 class="m-0">cart</h1>
          <h1 id="number" class="px-2 mx-2 my-0">{{cart}}</h1>
        </div>
        </div>
        <div class="row d-flex flex-wrap">
        <div class="d-none d-sm-block col-1 shadow-sm">
          <aside class="d-flex flex-column justify-content-start align-items-center py-4">
            <img class="py-4" src="@/assets/fork.png" alt="fork">
            <img class="py-4" src="@/assets/clipboard.png" alt="clipboard" @click="goTo()">
            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><img class="py-4" src="@/assets/add.png" alt="add"></button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form v-on:submit="add">
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label" >Name</label>
                        <div class="col-sm-10">
                          <input type="Name" class="form-control shadow-sm rounded" id="inputName" v-model="form.name">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputstok" class="col-sm-2 col-form-label">stok</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputstok" v-model="form.stok">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputImage" class="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-10">
                          <div class="custom-file">
                            <input type="text" class="form-control" id="inputImage" v-model="form.images">
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-10">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">Rp.</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" v-model="form.price">
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputImage-tittle" class="col-sm-2 col-form-label">image_tittle</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputImage-tittle"  v-model="form.image_tittle">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputTarget" class="col-sm-2 col-form-label">target</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputTarget"  v-model="form.target">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputcategory" class="col-sm-2 col-form-label">category</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputcategory"  v-model="form.category">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn text-white" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="bg-info text-white">Add</button>
                      </div>
                    </form>
                  </div>                  
                </div>
              </div>
            </div>
            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo">EDIT</button>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form v-on:submit="edit">
                      <div class="form-group row">
                        <label for="inputid" class="col-sm-2 col-form-label">id</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputid" v-model="form.id">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label" >Name</label>
                        <div class="col-sm-10">
                          <input type="Name" class="form-control shadow-sm rounded" id="inputName" v-model="form.name">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputstok" class="col-sm-2 col-form-label">stok</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputstok" v-model="form.stok">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputImage" class="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-10">
                          <div class="custom-file">
                            <input type="text" class="form-control" id="inputImage" v-model="form.images">
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-10">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">Rp.</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" v-model="form.price">
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputImage-tittle" class="col-sm-2 col-form-label">image_tittle</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputImage-tittle"  v-model="form.image_tittle">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputTarget" class="col-sm-2 col-form-label">target</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputTarget"  v-model="form.target">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputcategory" class="col-sm-2 col-form-label">category</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputcategory"  v-model="form.category">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn text-white" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="bg-info text-white">update</button>
                      </div>
                    </form>
                  </div>                  
                </div>
              </div>
            </div>
            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo">DELETE</button>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">delete Item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form v-on:submit="deleted(name)">
                      <div class="form-group row">
                        <label for="inputname" class="col-sm-2 col-form-label">name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputname" v-model="form.name">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn text-white" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="bg-info text-white">delete</button>
                      </div>
                    </form>
                  </div>                  
                </div>
              </div>
            </div>
          </aside> 
        </div>
        <div class="items-list col-7 px-0">
          <div class="sort">
            <div class="dropdown my-3">
              <button class="btn dropdown-toggle month font-15" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              id
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item" v-on:click="sortName">name</button>
              <button class="dropdown-item" v-on:click="sortPrice">price</button>
            </div>
            </div>
          </div>
          <main class="d-flex justify-content-center align-items-baseline flex-wrap">
            <div class="col" v-for="item in items" :key="item.id">
              <img class="btn p-0" role="button" data-toggle="collapse" :data-target="item.target" :src="item.images" width="250px" height="200px" :alt="item.image_tittle">
              <h2 class="font-weight-normal">{{item.name}}</h2>
              <h2>Rp. {{item.price}}</h2>
            </div>
          </main>
        </div>
        <div class="d-none d-sm-block col-4 border">
          <section id="sum-cart" class="d-flex flex-column justify-content-between align-items-center p-0 height">
            <div class="col d-flex flex-column justify-content-start align-items-center">
              <div id="empty" class="collapse show" data-parent="#parent" v-show="empty">
                <div class="d-flex flex-column justify-content-start align-items-center pt-5">
                  <img id="cup" class="img-fluid" src="@/assets/Your cart is empty.png" alt="food-and-restaurant">
                  <h2 class="font-25">Your cart is empty</h2>
                  <h2 class="font-weight-normal some">Please add some items from the menu</h2>
                </div>
              </div>
              <div v-for="item in items" :key="item.id" v-show="!empty">
                <div class="collapse" :id="item.image_tittle">
                  <div class="d-flex my-3 py-2">
                    <div class="d-flex">
                      <img :src="item.images" :alt="item.image_tittle" width="100px" height="100px">
                    </div>
                    <div class="d-flex flex-column align-items-start justify-content-between mx-4">
                      <h1>{{item.name}}</h1>
                      <div class="d-flex">
                        <h2 class="btn added" v-on:click="counter -= 1">-</h2>
                        <h2 class="numb d-flex align-items-center justify-content-center">{{counter}}</h2>
                        <h2 class="btn added mr-4" v-on:click="counter += 1">+</h2>
                        <h1 class="ml-2 my-0 d-flex align-items-end justify-content-end">Rp. {{item.price}}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="total">
              <div class="total col d-inline-flex flex-column justify-content-end p-0">
                <div class="row d-flex ml-0 justify-content-between">
                  <div class="col p-0">
                    <h1>Total :</h1>
                  </div>
                  <div class="col text-right">
                    <h1 id="total-price1">Rp. {{total_price}}</h1>
                  </div>
                </div>
                <div class="row ml-0">
                  <h3 class="font-weight-light">*Belum termasuk ppn</h3>
                </div>
                <div id="checkout" class="row ml-0 d-flex justify-content-center align-items-center py-2 my-2 mx-0 text-white btn bg-info" data-toggle="modal" data-target="#pay">
                  <h1>Checkout</h1>
                </div>
                <div class="row ml-0 d-flex justify-content-center align-items-center py-2 my-2 mx-0 text-white btn">
                  <h1>Cancel</h1>
                </div>
              </div>
            </div>
          </section>
          <div class="modal fade" id="pay" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content d-flex flex-column py-2">
                <div class="row mx-0 mb-4">
                  <div class="col">
                    <h1 class="font-25">Checkout</h1>
                    <h3 class="font-15">Cashier : Mas Sakti</h3>
                  </div>
                  <div class="col pr-2">
                    <h1 class="font-20">Receipt no: #010410919</h1>
                  </div>
                </div>
                <div class="row mx-0">
                  <div class="col-8 pl-2 pr-0">
                    <h2 class="font-20 my-4">Coffee Latte 1x</h2>
                    <h2 class="font-20 my-4">Black Forest 1x</h2>
                    <h2 class="font-20 my-4">Salmon Truffle Teriyaki 1x</h2>
                    <h2 class="font-20 my-4">Ppn 10%</h2>
                  </div>
                  <div class="col px-15">
                    <h2 class="font-20 my-4">Rp. 15.000</h2>
                    <h2 class="font-20 my-4">Rp. 30.000</h2>
                    <h2 class="font-20 my-4">Rp. 60.000</h2>
                    <h2 class="font-20 my-4">Rp. 10.500</h2>
                  </div>
                </div>
                <div class="row mx-0">
                  <div class="col-8 text-right">
                    <h2 class="font-20">Total :</h2>
                  </div>
                  <div class="col">
                    <h2 class="font-20">Rp. 115.500</h2>
                  </div>
                </div>
                <div class="row mx-0 pl-2 my-4">
                  <h2 class="font-20">Payment: Cash</h2>
                </div>
                <div class="row mx-2 py-2 justify-content-center align-items-center pink text-white rounded align-middle btn">
                  <h1 class="font-25">Print</h1>
                </div>
                <div class="row justify-content-center align-items-center">
                  <h1 class="font-25">Or</h1>
                </div>
                <div class="row mx-2 py-2 justify-content-center align-items-center bg-info text-white rounded align-middle btn">
                  <h1 class="font-25">Send Email</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'


export default {
  name: "home",
  data() {
    return {
      items: [],
      counter: 1,
      cart: 0,
      total_price: 0,
      form: {
        id: null,
        name: '',
        stok: 0,
        price: 0,
        images: '',
        image_tittle: '',
        target: '',
        Category: '',
      },
    }
  },
  methods: {
    goTo() {
      this.$router.push({path: "/history"})
    },
    getProduct() {
      axios
        .get(process.env.VUE_APP_URL)
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async add() {
      try {
        const response = await axios.post(process.env.VUE_APP_URL, this.form)
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async edit() {
      try {
        const response = await axios.put(process.env.VUE_APP_URL, this.form)
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async deleted() {
      try {
        const response = await axios({
          method: "DELETE",
          url: process.env.VUE_APP_URL,
          data: {name : this.form.name}
        })
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async sortName() {
      try {
        const response = await axios({
          method: "GET",
          url: process.env.DB_NAME,
        })
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async sortPrice() {
      try {
        const response = await axios({
          method: "GET",
          url: process.env.DB_PRICE,
        })
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async search() {
      try {
        const response = await axios({
          method: "GET",
          url: process.env.DB_SEARCH,
        })
        this.items = response.data
      } catch (e) {
        console.log(e)
      }
    },
  },

  mounted() {
        this.getProduct()
    },
}

</script>

<style>
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

.pink {
    background-color: #F24F8A;
}

h2 {
    font-weight: bold;
    margin: 0px;
    font-size: 25px;
}

.col-8 h1 {
    font-size: 30px;
}

.col-4 h1, .col-4 h2 {
    font-size: 25px;
}

.col-4 .px-2 {
    background-color: #57CAD5;
    color: white;
    border-radius: 100%;
    font-size: 25px;
}

main {
    background-color: rgba(190, 195, 202, 0.3);
}

main .col {
    margin: 10px auto;
}

section h2 {
    font-size: 30px;
}

h2.font-weight-normal.some {
    font-size: 20px;
    color: #CECECE;
}

.form-group label {
    font-weight: 600;
}

.custom-file label {
    font-weight: normal;
}

.btn.text-white {
    background-color: #F24F8A;
}

.modal-footer button {
    padding: 4px 4px;
    margin-right: 3px;
    font-weight: 500;
}
div .added {
    background-color: rgba(130, 222, 58, 0.2);
    border: 1px solid #82DE3A;
    box-sizing: border-box;
    color:#82DE3A;
    font-size: 40px;
    width: 45px;
    text-align: center;
}

.numb{
    background-color: #FFFFFF;
    color: #82DE3A;
    border: 1px solid #82DE3A;
    box-sizing: border-box;
    font-size: 25px;
    width: 45px;
    text-align: center;
}

.tick2 {
    width: 50px;
    height: 50px;
    left: 99px;
    top: 65px;
}

.square2 {
    left: 15px;
    top: 0px;
    width: 250px;
    height: 200px;
    background: rgba(0, 0, 0, 0.4);
}

.tick6 {
    width: 50px;
    height: 50px;
    left: 99px;
    top: 65px;
}

.square6 {
    left: 15px;
    top: 0px;
    width: 250px;
    height: 200px;
    background: rgba(0, 0, 0, 0.4);
}

.tick8 {
    width: 50px;
    height: 50px;
    left: 99px;
    top: 65px;
}

.square8 {
    left: 15px;
    top: 0px;
    width: 250px;
    height: 200px;
    background: rgba(0, 0, 0, 0.4);
}

.total {
    width: 490px;
}

.height{
    height: 900px;
}
</style>