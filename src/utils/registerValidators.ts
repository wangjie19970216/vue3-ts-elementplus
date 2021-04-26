import { ref } from "vue"

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
  role: string;
}

export const registerUser = ref<RegisterUser>({
  name: "",
  email: "",
  password: "",
  password2: "",
  role: "",
});

interface RegisterRules {
  password: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
  })[];

  name: ({
    message: string;
    required: boolean;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
  })[];
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password2: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
  } | {
    validator: (rule: RegisterRules, values: string, callback: any) => void;
    trigger: string;
  })[];
}

const validatePass2 = (rule: RegisterRules, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== registerUser.value.password) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};


export const registerRules = ref<RegisterRules>({
  name: [
    {
      message: "用户名不能为空...",
      required: true,
      trigger: "blur",
    },
    {
      min: 2,
      max: 30,
      message: "Password's length has to be 2 to 30 characters",
    },
  ],
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
  password2: [
    {
      required: true,
      message: "Password2 cound not be empty...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "Password's length has to be 6 to 30 characters",
    },
    { validator: validatePass2, trigger: "blur" },
  ],
});