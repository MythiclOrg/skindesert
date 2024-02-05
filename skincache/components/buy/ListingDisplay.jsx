import React, { forwardRef } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import WeaponListing from '../common/WeaponListing';

const gridComponents = {
  List: forwardRef(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        ...style,
      }}
    >
      {children}
    </div>
  )),
  Item: ({ children, ...props }) => (
    <div
      {...props}
      style={{
        display: 'flex',
        flex: '1',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  ),
};

const ListingDisplay = () => {
  return (
    <VirtuosoGrid
      style={{ height: '100%' }}
      totalCount={200}
      components={gridComponents}
      className="rounded-xl"
      itemClassName="p-2 min-w-[175px]"
      itemContent={(index) => (
        <WeaponListing
          imgSrc={
            'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZh7PXJdTh94czhq4yCkP_gfb7VwzgGsZAn3L_Codigjge2-0M9Z2D1LIaTcAM_ZQrTqAO7lbrug5Ci_MOeD_P4rHw/256fx256f'
          }
        />
      )}
    />
  );
};

export default ListingDisplay;
