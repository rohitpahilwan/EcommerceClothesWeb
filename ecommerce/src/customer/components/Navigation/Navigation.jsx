import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/women/new-arrivals",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/women/basic-tees",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "/women/tops" },
            { name: "Dresses", href: "/women/dresses" },
            { name: "Pants", href: "/women/pants" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/men/new-arrivals",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/men/artwork-tees",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "/men/tops" },
            { name: "Pants", href: "/men/pants" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/company" },
    { name: "Stores", href: "/stores" },
  ],
};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    men: true,
    women: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedCategories.men && !selectedCategories.women) {
      navigate("/");
    }
  }, [selectedCategories, navigate]);

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
    navigate("/"); // Navigate to home page when category is toggled
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-40 lg:hidden"
      >
        {/* Dialog content */}
      </Dialog>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              {/* Left side: Categories */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <PopoverButton
                        className="relative flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        onClick={() => handleCategoryToggle(category.id)}
                      >
                        {category.name}
                        <span className="absolute inset-x-0 -bottom-px h-0.5 w-full bg-transparent transition-all duration-300 ease-in-out hover:bg-indigo-600"></span>
                      </PopoverButton>

                      <PopoverPanel
                        className="absolute inset-x-0 top-full z-10 text-sm text-gray-500"
                        transition
                      >
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <button
                                      onClick={() => navigate(item.href)}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      {item.name}
                                    </button>
                                    <p
                                      aria-hidden="true"
                                      className="mt-1 text-gray-500"
                                    >
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.id}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.id}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <button
                                            onClick={() => navigate(item.href)}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              {/* Right side: Icons and Avatar */}
              <div className="flex items-center space-x-4">
                {/* Search Icon */}
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>

                {/* Cart Icon */}
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                </button>

                {/* Avatar with Dropdown Menu */}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                      R
                    </div>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate("/account/order")}
                            className={`block w-full px-4 py-2 text-sm ${
                              active ? "bg-gray-100" : ""
                            } text-gray-700`}
                          >
                            My Orders
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate("/profile")}
                            className={`block w-full px-4 py-2 text-sm ${
                              active ? "bg-gray-100" : ""
                            } text-gray-700`}
                          >
                            My Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate("/logout")}
                            className={`block w-full px-4 py-2 text-sm ${
                              active ? "bg-gray-100" : ""
                            } text-gray-700`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
