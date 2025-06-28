
export const formatTime = (time:string | undefined) => {
    return `${time?.split("T")[0]} | ${time?.split("T")[1].split(".")[0]}`
}