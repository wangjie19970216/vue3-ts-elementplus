<template>
  <el-form label-width="120px" class="container">
    <el-form-item label="邮箱" prop="email">
      <el-input
        type="email"
        v-model="email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="handleForgotPassword()"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const email = ref<string>("");
    const handleForgotPassword = async () => {
      if (email.value) {
        const res = await ctx.$axios.post("/api/v1/auth/forgotpassword", {
          email: email.value,
        });
      }
    };

    return { handleForgotPassword, email };
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: 200px auto;
}
.submit-btn {
  width: 100%;
}
</style>