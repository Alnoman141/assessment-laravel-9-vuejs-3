<template>
  <div id="app">
    <div class="">
      <h3 class="my-3">Customer List</h3>
      <select
        v-model="filter_value"
        class="form-select d-iniline-block w-25"
        aria-label="Default select example"
        @change="getBillsByFilter"
      >
        <option selected disabled value="">Filter</option>
        <option value="due">Due</option>
        <option value="paid">Paid</option>
        <option value="all">All</option>
      </select>
      <button
        class="btn btn-primary btn-sm d-block ms-auto me-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click.prevent="clearForm"
      >
        Generate Bill
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">BillID</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Bill Month</th>
          <th scope="col">Bill Year</th>
          <th scope="col">Bill Amount</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bill, index) in bills" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ bill.id }}</td>
          <td>{{ bill.customer.name }}</td>
          <td>{{ months[bill.bill_month - 1] }}</td>
          <td>{{ bill.bill_year }}</td>
          <td>{{ bill.amount }}</td>
          <td>{{ bill.status }}</td>
          <td>
            <button
              class="btn btn-primary btn-sm me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="updateBill(bill)"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- customer create modal -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Customer Bill</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <form-component
            :bill="bill"
            :customers="customers"
            :message="message"
          ></form-component>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            v-if="!bill.id"
            @click.prevent="createBill"
            type="button"
            class="btn btn-primary"
          >
            Save
          </button>
          <button
            v-if="bill.id"
            @click.prevent="saveUpdatedBill"
            type="button"
            class="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import { isEmpty } from "@/utils/validate";
import _ from "lodash";
export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      customers: [],
      bills: [],
      allBill: [],
      filter_value: "",
      bill: {
        customer_id: "",
        bill_month: "",
        bill_year: "",
        amount: "",
        bill_month_year: "",
        status: "due",
      },
      message: {
        type: "",
        text: "",
      },
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  mounted() {
    this.getBills();
    this.getCustomers();
  },
  methods: {
    getBills() {
      this.$store.dispatch("billStore/getBills").then(({ data }) => {
        this.bills = data.bills;
        this.allBill = data.bills;
      });
    },
    getCustomers() {
      this.$store.dispatch("customerStore/getCustomers").then(({ data }) => {
        this.customers = data.customers;
      });
    },
    getBillsByFilter(){
        if(this.filter_value == 'all'){
            this.bills = this.allBill;
        } else {
            this.bills = _.filter(this.allBill, {status: this.filter_value});
        }
    },
    createBill() {
      this.bill.bill_month = this.bill.bill_month_year.split("-")[1];
      this.bill.bill_year = this.bill.bill_month_year.split("-")[0];
      if (isEmpty(this.bill)) {
        this.message.type = "danger";
        this.message.text = "Please fill all the fields";
      } else {
        this.$store
          .dispatch("billStore/createBill", this.bill)
          .then(({ data }) => {
            this.message.type = "success";
            this.message.text = "Bill created successfully";
            this.getBills();
            this.clearForm();
            document.getElementById("closeModal").click();
          })
          .catch(({ response }) => {
            this.message.type = "danger";
            this.message.text = response.data.message;
          });
      }
    },
    updateBill(bill) {
      this.bill = {
        id: bill.id,
        customer_id: bill.customer_id,
        bill_month: bill.bill_month,
        bill_year: bill.bill_year,
        amount: bill.amount,
        bill_month_year: `${bill.bill_year}-${bill.bill_month}`,
        status: bill.status,
      };
    },
    clearForm() {
      this.bill = {
        customer_id: "",
        bill_month: "",
        bill_year: "",
        amount: "",
        bill_month_year: "",
        status: "due",
      };
    },
    saveUpdatedBill() {
      this.bill.bill_month = this.bill.bill_month_year.split("-")[1];
      this.bill.bill_year = this.bill.bill_month_year.split("-")[0];
      if (isEmpty(this.bill)) {
        this.message.type = "danger";
        this.message.text = "Please fill all the fields";
      } else {
        this.$store
          .dispatch("billStore/updateBill", this.bill)
          .then(({ data }) => {
            this.message.type = "success";
            this.message.text = "Bill updated successfully";
            this.getBills();
            this.clearForm();
            document.getElementById("closeModal").click();
          })
          .catch(({ response }) => {
            this.message.type = "danger";
            this.message.text = response.data.message;
          });
      }
    },
  },
};
</script>

<style></style>
