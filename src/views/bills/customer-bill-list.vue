<template>
  <div id="app">
    <div class="">
      <h3 class="my-3">My Bill List</h3>
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
        </tr>
      </tbody>
    </table>
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
      bills: [],
      allBill: [],
      filter_value: "",
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
  },
  methods: {
    // get auth customers bills
    getBills() {
      this.$store.dispatch("billStore/getAuthCustomerBills").then(({ data }) => {
        this.bills = data.bills;
        this.allBill = data.bills;
      });
    },
    // get bills by filter
    getBillsByFilter(){
        if(this.filter_value == 'all'){
            this.bills = this.allBill;
        } else {
            this.bills = _.filter(this.allBill, {status: this.filter_value});
        }
    },
  },
};
</script>

<style></style>
