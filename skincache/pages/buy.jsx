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
} from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { IoMdPricetag, IoMdSearch } from 'react-icons/io';
import { TbRefresh } from 'react-icons/tb';
import { FiHeart } from 'react-icons/fi';
import { FaSortAmountDown } from 'react-icons/fa';

const BuyPage = () => {
  return (
    <DefaultLayout>
      <div className="w-full flex mt-4">
        <div className="pt-16">
          <Card shadow="sm" className="w-56 mr-3 p-4">
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
        <div>
          <div className="flex items-center">
            <Card shadow="sm" className="h-16 mx-4 w-fit">
              <div className="flex items-center align-middle h-full px-6 text-default-800">
                <TbRefresh className="cursor-pointer" size={22} />
                <Divider orientation="vertical" className="max-h-[24px] mx-4" />
                <FiHeart className="text-primary cursor-pointer" size={21} />
              </div>
            </Card>
            <Card shadow="sm" className="h-16 mx-4 w-fit min-w-[500px]">
              <div className="px-4 text-default-800">
                <Input variant={'underlined'} label="🔎 Search" />
              </div>
            </Card>
            <Card shadow="sm" className="h-16 mx-4 w-fit">
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
            <Card shadow="sm" className="h-16 mx-4 w-fit">
              <div className="flex items-center align-middle h-full px-6 text-default-800">
                cart sum and checkout btn
              </div>
            </Card>
          </div>
          <div className="py-4">
            <div className="max-h-[68vh] overflow-scroll px-4 py-4">
              <div className="grid grid-cols-6 gap-3">
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD4uOinYeOhcj7IbrfkW5u5Mx2gv2P8Y-mjVDk-0JoMW6hJoaXdlc5NwqDqwDvkr_u08Tu6sycynFguych4GGdwUKPWgFGtQ/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09K_k4ifgP7nO4Tdn2xZ_Ishib2Urd33jQTt_xZuMT30J4THJ1U_aQ2CrgDqw7johMS9vJzBmCRhpGB8sq3xhCxI/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DeXEl7NwdOtbagFABs3OXNYgJP48i5hoOSlPvxDKLUmmde__pyi-TOyoD8j1yg5UQ5N2v1JdTAcAZoZVrR_1K_yObtgJDq7czOz3Mx6CBw7X3dzRfi1xFSLrs4IbZNKyg/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJV5dCykomZksj5Nr_Yg2Yf65wl0uiS9N6jjAS1_BZpZzymLYPBdFdrZArR81G5wLq6gcW_uJicmGwj5HdWJZ3WHA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09O1kYGFqPz6Or3UqWZU7Mxkh6eWotz3iVXn-RU6YDz0I9fDe1U7N1qD-FLtk-fs0ZC-75yayiBruSZ2-z-DyI5k6X-1/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
                <WeaponListing
                  imgSrc={
                    'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/256fx256f'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuyPage;
