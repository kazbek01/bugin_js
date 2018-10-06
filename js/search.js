var btn_search = document.querySelector('#btn-search');
var block_search = document.querySelector('#search-result');
var img_search = document.querySelector('#arr-up');
btn_search.onclick = function () {
    if (block_search.style.display == 'none') {
        block_search.style.display = 'block';
        img_search.style.transform = 'rotate(180deg)';
    }
    else if (block_search.style.display == 'block') {
        block_search.style.display = 'none';
        img_search.style.transform = 'rotate(0deg)';
    }
    else {
        block_search.style.display = 'none';
    }
}
