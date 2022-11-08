<template>
  <div id="app">
    <div class="">
      <h3 class="my-3">Customer List</h3>
      <button
        class="btn btn-primary btn-sm d-block ms-auto me-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Customer
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Acton</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.address }}</td>
          <td>
            <button
              class="btn btn-primary btn-sm me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click.prevent="showEditModal(customer)"
            >
              Edit
            </button>
            <button class="btn btn-danger btn-sm">Delete</button>
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Customer Create
          </h1>
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
            :customer="customer"
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
            @click.prevent="createCustomer"
            type="button"
            class="btn btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import { validEmail } from "@/utils/validate";
export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      customers: [],
      customer: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
      },
      message: {
        type: "",
        text: "",
      },
    };
  },
  mounted() {
    this.getCustomers();
  },
  methods: {
    getCustomers() {
      this.$store.dispatch("customerStore/getCustomers").then(({ data }) => {
        this.customers = data.customers;
      });
    },
    createCustomer() {
      if (
        this.customer.name == "" ||
        this.customer.email == "" ||
        this.customer.password == "" ||
        this.customer.password_confirmation == ""
      ) {
        this.message.type = "danger";
        this.message.text = "All fields are required";
      } else if (!validEmail(this.customer.email)) {
        this.message = {
          type: "danger",
          text: "Please enter a valid email address",
        };
      } else if (
        this.customer.password != this.customer.password_confirmation
      ) {
        this.message.type = "danger";
        this.message.text = "Password and Confirm Password must be same";
      } else {
        this.$store
          .dispatch("customerStore/createCustomer", this.customer)
          .then(({ data }) => {
            this.getCustomers();
            this.clearForm();
            document.getElementById('closeModal').click();
          })
          .cath((error) => {
            this.message.type = "danger";
            this.message.text = "Customer create failed";
          });
      }
    },
    showEditModal(customer) {
      this.customer = customer;
    },
    clearForm() {
      this.customer = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
      };
    },
  },
};
</script>

<style></style>
