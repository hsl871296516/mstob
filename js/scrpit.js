
     const picUrlList = [
        'img/unsplash.jpg', // 0
        'img/dDVU6D.jpg', // 1
        'img/Ebwp2-6BG8E.jpg', // 2
        'img/T0inbt7nRME.jpg', // 3
    ]

    let currentIndex = 0

    window.onload = () => {
        const img = document.querySelector('#img')
        const prevBtn = document.querySelector('#left')
        const nextBtn = document.querySelector('#right')
        img.src = picUrlList[currentIndex]

        prevBtn.onclick = () => {
            if (currentIndex - 1 < 0) {
                currentIndex = picUrlList.length - 1
            } else {
                currentIndex -= 1
            }
            img.src = picUrlList[currentIndex]
        }

        nextBtn.onclick = () => {
            if (currentIndex + 1 === picUrlList.length) {
                currentIndex = 0
            } else {
                currentIndex += 1
            } 
            console.log('当前的 currentIndex 是: ', currentIndex)
            img.src = picUrlList[currentIndex]
        }
    }