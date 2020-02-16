export default {
    sleep: async (t) => {
        return new Promise((accept) => setTimeout(accept, t));
    }
}
