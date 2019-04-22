function classes(...names:(string | undefined)[]) {
    return names.filter((names)=>names).join(' ')
}
export default classes;