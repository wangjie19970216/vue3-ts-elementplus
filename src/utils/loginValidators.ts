import { ref } from "vue";

interface User {
  email: string;
  password: string;
}

export const loginUser = ref<User>({
  email: "",
  password: "",
});

interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    required?: undefined;
    trigger?: undefined;
  })[];
}

export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      message: "Email is incorrect...",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Password cound not be empty...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "Password's length has to be 6 to 30 characters",
    },
  ],
});