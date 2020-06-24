import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// import { firestore } from '../../firebase/firebase.utils';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  // EXAMPLE OF COMPONENT WILL UNMOUNT EQUIVALENT
  // useEffect(() => {
  //   console.log('[useEffect] : I am subscribing');
  //   const unsubscribeFromCollections = firestore
  //     .collection('collections')
  //     .onSnapshot(snapshot => console.log('[SNAPSHOT]', snapshot));

  //   return () => {
  //     console.log('[useEffect] : I am Unsubscribing')
  //     unsubscribeFromCollections();
  //   }
  // }, [])

  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

