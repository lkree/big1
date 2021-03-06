import React, {createContext, useState} from 'react';
import useCookie from "../hooks/useCookie";

export const DeliveryPropertiesContext = createContext([{}, () => {}]);

const DeliveryPropertiesProvider = ({children}) => {
  const [cookie, updateCookie] = useCookie(['deliveryAddress', 'deliveryType', 'deliveryCost', 'deliveryDeadline', 'selfExportPointId', 'deliveryCity']);
  const [props, setProps] = useState({
    ...cookie,
    pickup: {
      officeHeader: 'Офисы обслуживания',
      pointHeader: 'Пункты самовывоза',
      linkText: 'Выбрать другое место самовывоза',
      showModule: !cookie.deliveryAddress && !cookie.deliveryType,
    },
    selfExport: {
      header: 'Пункты доставки',
      linkText: 'Выбрать другой пункт выдачи',
      showModule: false,
    },
  });
  /**
   * @param newData {Object: {Any}}
   * @returns {{selfExport: {header: string, linkText: string, showModule: boolean, point: *}, pickup: {header: string, linkText: string, showModule: boolean, point: *}}}
   * @private
   */
  const _updateProps = (newData = {}) => {
    updateCookie();
    setProps(state => {
      return {
        ...state,
        ...cookie,
        ...newData,
      }
    });

    return props;
  };

  return (
    <DeliveryPropertiesContext.Provider value={[props, _updateProps]}>
      {children}
    </DeliveryPropertiesContext.Provider>
  );
};

export default DeliveryPropertiesProvider;