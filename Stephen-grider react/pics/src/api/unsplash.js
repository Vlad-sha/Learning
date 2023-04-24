import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID lqOUzZay34QG5g3mpoFtiMgdyliLx5DDNYtuvROjK2M",
  },
})
