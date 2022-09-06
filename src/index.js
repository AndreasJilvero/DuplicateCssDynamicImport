import domLoaded from 'dom-loaded';
import "./index.scss";

domLoaded.then(() => {
  document.body.insertAdjacentHTML('beforeend', `<p>Hello!</p>`);

  import('./components/dynamic');
});