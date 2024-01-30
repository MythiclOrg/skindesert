import React from 'react';
import { CardFooter, Image } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { FaCartShopping } from 'react-icons/fa6';

const WeaponListing = ({ imgSrc }) => {
  return (
    <Card
      as={'div'}
      onClick={() => console.log(33)}
      isPressable
      className="w-[180px] group !transition hover:brightness-125"
    >
      <CardBody className="items-center">
        <Image isBlurred width={120} height={120} src={imgSrc} />
        <div className="pt-0 flex w-full flex-col items-start">
          <div className="text-xs font-thin">
            <span className="text-primary">ST</span> / FN / 0.0342
          </div>
          <div className="text-sm tracking-wider pt-1 pb-2 font-mono">
            $254.50
          </div>
          <Button
            variant="flat"
            className="group-hover:bg-primary-700"
            fullWidth
            size="sm"
          >
            <FaCartShopping className="text-default-600 group-hover:dark" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default WeaponListing;
