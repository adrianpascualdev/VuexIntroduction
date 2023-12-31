import getRandomInt from "@/helpers/getRandomInt"

export const incrementRandomInt = async ( {commit} ) => {
    const randomInt = await getRandomInt()
    commit('incrementBy', randomInt)
    commit('setLoading', true)
}