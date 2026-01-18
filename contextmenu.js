document.addEventListener('DOMContentLoaded', function () {

    let elements = document.querySelectorAll('.element');

    elements.forEach(function (element) {
        element.addEventListener('contextmenu', function (event) {
            let targetContextMenu = event.target.nextElementSibling;

            // hide default right click menu
            event.preventDefault();
            // show current menu
            showCurrentMenu(event, targetContextMenu);
            // hide current menu
            hideCurrentMenu(targetContextMenu);
        });
    });

    function showCurrentMenu(event, targetContextMenu) {
        let contextMenuTopPos = event.clientY - 10 + 'px';
        let contextMenuLeftPos = event.clientX - 10 + 'px';

        // hide all menus first
        hideAllContextMenus()
        // then show current menu
        targetContextMenu.classList.add('show');
        // set menus position in relation to the mouse position
        targetContextMenu.style.top = contextMenuTopPos;
        targetContextMenu.style.left = contextMenuLeftPos;
    }

    function hideCurrentMenu(targetContextMenu) {
        document.addEventListener('click', function (event) {
            if (event.target !== targetContextMenu && !targetContextMenu.contains(event.target)) {
                targetContextMenu.classList.remove('show');
            }
        });
    }

    function hideAllContextMenus() {
        let allContextMenus = document.querySelectorAll('.context-menu');

        allContextMenus.forEach(function (contextMenu) {
            contextMenu.classList.remove('show');
        });
    }

});