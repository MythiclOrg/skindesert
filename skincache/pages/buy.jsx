import DefaultLayout from '@/layouts/default';
import React from 'react';
import WeaponListing from '@/components/common/WeaponListing';
import {
  Card,
  Divider,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
} from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { IoMdPricetag, IoMdSearch } from 'react-icons/io';
import { TbRefresh } from 'react-icons/tb';
import { FiHeart } from 'react-icons/fi';
import { ScrollShadow } from '@nextui-org/react';

import { GrNext } from 'react-icons/gr';

import { FaSortAmountDown, FaShoppingCart } from 'react-icons/fa';
import ListingDisplay from '@/components/buy/ListingDisplay';

const BuyPage = () => {
  return (
    <DefaultLayout>
      <div className="w-full mx-auto flex">
        <div className="pt-16">
          <Card shadow="sm" className="w-56 mx-3 p-4">
            <div className="font-bold capitalize pb-2">Filters</div>
            <Divider />
            <Accordion
              showDivider={false}
              selectionMode="multiple"
              isCompact
              className="!p-0 mt-2"
              itemClasses={{
                base: 'py-0 w-full',
                title: 'font-normal text-medium',
                trigger:
                  'px-1 py-0 data-[hover=true]:bg-default-100 rounded-lg h-11 flex items-center',
                indicator: 'text-medium',
                content: 'text-small px-1',
              }}
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <div className="flex items-center">
                    <IoMdPricetag />{' '}
                    <div className="ml-1 font-semibold text-sm">Price</div>
                  </div>
                }
              >
                price filter here
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 1"
                title={
                  <div className="flex items-center">
                    <IoMdPricetag />{' '}
                    <div className="ml-1 font-semibold text-sm">Price</div>
                  </div>
                }
              >
                price filter here
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 1"
                title={
                  <div className="flex items-center">
                    <IoMdPricetag />{' '}
                    <div className="ml-1 font-semibold text-sm">Price</div>
                  </div>
                }
              >
                price filter here
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 1"
                title={
                  <div className="flex items-center">
                    <IoMdPricetag />{' '}
                    <div className="ml-1 font-semibold text-sm">Price</div>
                  </div>
                }
              >
                price filter here
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 1"
                title={
                  <div className="flex items-center">
                    <IoMdPricetag />{' '}
                    <div className="ml-1 font-semibold text-sm">Price</div>
                  </div>
                }
              >
                price filter here
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 1"
                title={
                  <div className="flex items-center">
                    <IoMdPricetag />{' '}
                    <div className="ml-1 font-semibold text-sm">Price</div>
                  </div>
                }
              >
                price filter here
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
        <div className="w-full">
          <div className="flex items-center h-16 justify-between">
            <Card shadow="sm" className="h-full">
              <div className="flex items-center align-middle h-full px-6 text-default-800">
                <TbRefresh className="cursor-pointer" size={22} />
                <Divider orientation="vertical" className="max-h-[24px] mx-4" />
                <FiHeart className="text-primary cursor-pointer" size={21} />
              </div>
            </Card>
            <Card
              shadow="sm"
              className="h-full w-[calc(100%-440px)] min-w-[400px]"
            >
              <div className="px-4 text-default-800">
                <Input variant={'underlined'} label="Search" />
              </div>
            </Card>
            <Card shadow="sm" className="h-full">
              <div className="px-3 h-full flex items-center text-default-800">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="light" endContent={<FaSortAmountDown />}>
                      Price
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                  >
                    <DropdownItem key="text">Text</DropdownItem>
                    <DropdownItem key="number">Number</DropdownItem>
                    <DropdownItem key="date">Date</DropdownItem>
                    <DropdownItem key="single_date">Single Date</DropdownItem>
                    <DropdownItem key="iteration">Iteration</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Card>
            <Card as={'div'} isPressable shadow="sm" className="h-full">
              <div className="flex items-center align-middle h-full px-4 text-default-800">
                <Badge
                  variant="solid"
                  showOutline={false}
                  content="3"
                  size="sm"
                  color="primary"
                >
                  <FaShoppingCart size={20} />
                </Badge>
                <div className="font-mono ml-3 mr-2 font-medium tracking-wide">
                  $1050
                </div>
                <GrNext />
              </div>
            </Card>
          </div>
          <div className="py-4">
            <ScrollShadow className="h-[calc(100dvh-160px)]">
              <div className="h-[calc(100dvh-140px)]">
                <ListingDisplay />
              </div>
            </ScrollShadow>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuyPage;
