(function () {
    const CLASS_HIDDEN = 'ez-extra-actions--hidden';
    const btns = [...document.querySelectorAll('.ez-btn--extra-actions')];
    const allActions = [...document.querySelectorAll('.ez-extra-actions')];

    btns.forEach(btn => {
        const actions = allActions.find(item => item.dataset.btn === btn.dataset.actions);



        btn.addEventListener('click', () => {
            const btnRect = btn.getBoundingClientRect();

            allActions.forEach(item => item.classList.add(CLASS_HIDDEN));

            actions.classList.remove(CLASS_HIDDEN);
            // actions.style.top = btnRect.top + 'px';
            // actions.style.left = btnRect.left + 'px';
        }, false);
    });
})();
