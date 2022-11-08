<template>
  <div :class="`alert alert-${message.type}`" role="alert">
    {{ message.text }}
  </div>
  <form>
    <div class="row mb-3">
      <label for="inputName" class="col-sm-4 col-form-label">Customer</label>
      <div class="col-sm-8">
        <select v-model="bill.customer_id" class="form-select" aria-label="Default select example">
          <option disabled selected value="">Open this select menu</option>
          <option v-for="(customer, index) in customers" :key="index" :value="customer.id">{{ customer.name }}</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="bill_year" class="col-sm-4 col-form-label">Bill Month & Year</label>
      <div class="col-sm-8">
        <input
          v-model="bill.bill_month_year"
          type="month"
          class="form-control"
          id="bill_year"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="amount" class="col-sm-4 col-form-label">Bill Amount</label>
      <div class="col-sm-8">
        <input
          v-model="bill.amount"
          type="number"
          class="form-control"
          id="amount"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="status" class="col-sm-4 col-form-label">Bill Status</label>
      <div class="col-sm-8">
        <select v-model="bill.status" class="form-select" aria-label="Default select example">
          <option value="due">Due</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["bill", "customers", "message"],
  methods: {},
};
</script>

<style></style>
