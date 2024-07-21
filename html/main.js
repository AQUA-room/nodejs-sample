console.log("aaaaa")

window.addEventListener("load",function() {
    let count = 0
    const plusbutton = document.getElementById("plus")
    const minusbutton = document.getElementById("minus")
    const countpreviw = document.getElementById("count")
    console.log(plusbutton)
    console.log(minusbutton)
    const handleplus = (e) => {
        console.log("click")
        count++
        console.log(count)
        countpreviw.innerHTML = count
    }

    const handleminus = (e) => {
        console.log("click")
        if (count == 0) {
            return
        }
        count--
        console.log(count)
        countpreviw.innerHTML = count
    }

    plusbutton.addEventListener("click",handleplus)
    
    minusbutton.addEventListener("click",handleminus)    
})