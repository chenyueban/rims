import Provider from './provider';
import { checkMapStateToProps, checkMapDispatchToProps, checkFrame } from './check';

function createConnect(store, frame) {
  checkFrame(frame);
  return (mapStateToProps, mapDispatchToProps) => (Components) => {
    checkMapStateToProps(mapStateToProps);
    checkMapDispatchToProps(mapDispatchToProps);
    return Provider({
      store,
      mapStateToProps,
      mapDispatchToProps,
      Components,
      frame,
    });
  };
}

export default createConnect;
