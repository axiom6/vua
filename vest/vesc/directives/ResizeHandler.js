
import store from '../../store/index.js'

export default {
  inserted (el) {
    const checkIsDesktop = () => {
      return true; //window.matchMedia(store.getters.config.windowMatchSizeLg).matches
    }

    let prevMatchlg = checkIsDesktop()
    let sidebar = el.querySelector('.vuestic-sidebar')

    el.addEventListener('transitionend', function () {
      store.dispatch('isToggleWithoutAnimation', false).then();
    })

    window.addEventListener('resize', function () {
      if (checkIsDesktop() && !prevMatchlg) {
        sidebar.classList.remove('sidebar-hidden')
      } else if (!checkIsDesktop() && prevMatchlg) {
        store.dispatch('isToggleWithoutAnimation', true).then();
        sidebar.classList.add('sidebar-hidden')
      }
      prevMatchlg = checkIsDesktop()
    })
  },
}
