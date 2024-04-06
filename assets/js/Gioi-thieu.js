document.addEventListener("DOMContentLoaded", function() 
{
    const showMoreBtn = document.getElementById('showMore-members-button');
    const memberList = document.querySelectorAll('.showMore-members');
    const scrollToId = document.getElementById('principal-table-cards-firstCard');

    memberList.forEach(function(element) {
        element.classList.add('showMore-members-hidden');
    });

    showMoreBtn.addEventListener('click', function()
    {
        if(showMoreBtn.innerText == "Thu gọn")
        {
            memberList.forEach(function(element) {
                element.classList.add('showMore-members-hidden');
            });
            memberList.forEach(function(element) {
                element.style.animation = "hideMembers 1s ease";
            });
            showMoreBtn.innerText = 'Xem thêm thành viên';
            
            scrollToId.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
        }
        else{
            memberList.forEach(function(element) {
                element.classList.remove('showMore-members-hidden');
            });
            memberList.forEach(function(element) {
                element.style.animation = "showMembers 1s ease";
            });
            showMoreBtn.innerText = "Thu gọn";
        }
        
    });

    

});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Lấy tất cả các phần tử menu
    const menuItems = document.querySelectorAll('.app-menu-item a');

    // Lặp qua từng phần tử menu để kiểm tra vị trí cuộn của màn hình
    menuItems.forEach(function(item) {
        const targetId = item.getAttribute('href').substring(1);

        // Kiểm tra xem phần tử có tồn tại không
        const section = document.getElementById(targetId);
        if (section) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                // Nếu màn hình cuộn đến phần tử, thêm lớp 'highlight', ngược lại loại bỏ lớp 'highlight'
                item.classList.add('highlight');
            } else {
                item.classList.remove('highlight');
            }
        }
    });
});