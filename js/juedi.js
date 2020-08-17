window.addEventListener('load', function () {
  let lis = document.querySelector('.sec4').querySelectorAll('li')
  console.log("lis", lis)
  // lis.forEach(element => {
  //   element.addEventListener('mouseenter', function (e) {
  //     console.log(e.target);

  //   })
  // });
  // 图1缩放
  lis[0].addEventListener('mouseenter', (e) => {
    lis[0].style.width = '56%'
    lis[1].style.width = '22%'
    lis[2].style.width = '22%'
    lis[0].children[0].style.opacity = '1'
    lis[0].children[0].style.left = '0'
    lis[0].children[1].style.opacity = '0'
  })
  lis[0].addEventListener('mouseleave', (e) => {
    lis[0].style.width = '33%'
    lis[1].style.width = '34%'
    lis[2].style.width = '33%'
    lis[0].children[0].style.opacity = '.6'
    lis[0].children[0].style.left = '-150px'
    lis[0].children[1].style.opacity = '1'
  })
  // 图2
  lis[1].addEventListener('mouseenter', (e) => {
    lis[1].style.width = '56%'
    lis[0].style.width = '22%'
    lis[2].style.width = '22%'
    lis[1].children[0].style.opacity = '1'
    lis[1].children[1].style.opacity = '0'
  })
  lis[1].addEventListener('mouseleave', (e) => {
    lis[0].style.width = '33%'
    lis[1].style.width = '34%'
    lis[2].style.width = '33%'
    lis[1].children[0].style.opacity = '.6'
    lis[1].children[1].style.opacity = '1'
  })
  // 图3
  lis[2].addEventListener('mouseenter', (e) => {
    lis[2].style.width = '56%'
    lis[1].style.width = '22%'
    lis[0].style.width = '22%'
    lis[2].children[0].style.opacity = '1'
    lis[2].children[0].style.right = '0'
    lis[2].children[1].style.opacity = '0'
  })
  lis[2].addEventListener('mouseleave', (e) => {
    lis[0].style.width = '33%'
    lis[1].style.width = '34%'
    lis[2].style.width = '33%'
    lis[2].children[0].style.opacity = '.6'
    lis[2].children[0].style.right = '-150px'
    lis[2].children[1].style.opacity = '1'
  })

})