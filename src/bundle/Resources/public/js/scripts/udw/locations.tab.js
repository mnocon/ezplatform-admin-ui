(function () {
    const btns = document.querySelectorAll('.btn--udw-add');
    const submitButton = document.querySelector('#content_location_add_add');
    const form = document.querySelector('form[name="content_location_add"]');
    const input = form.querySelector('#content_location_add_new_locations');
    const udwContainer = document.getElementById('react-udw');
    const token = document.querySelector('meta[name="CSRF-Token"]').content;
    const siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    const closeUDW = () => udwContainer.innerHTML = '';
    const onConfirm = (items) => {
        closeUDW();

        input.value = items[0].id;
        submitButton.click();
    };
    const canSelectContent = ({ item }, callback) => callback(item.ContentInfo.Content.ContentTypeInfo.isContainer);
    const onCancel = () => closeUDW();
    const openUDW = (event) => {
        event.preventDefault();
        event.stopPropagation();

        window.ReactDOM.render(window.React.createElement(window.eZ.modules.UniversalDiscovery, {
            onConfirm,
            onCancel,
            canSelectContent,
            confirmLabel: 'Add location',
            title: 'Select location',
            multiple: false,
            startingLocationId: window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,
            restInfo: {token, siteaccess}
        }), udwContainer);
    };

    btns.forEach(btn => btn.addEventListener('click', openUDW, false));
})();
