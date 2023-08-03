import { DashboardCfpType } from '@/lib/types';

import 'react-toastify/dist/ReactToastify.css';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface DashboardCfpCardType {
  cfp: DashboardCfpType;
  setDeleteId: (_id: string) => void;
}

const DashboardCfpCard = (props: DashboardCfpCardType) => {
  const { _id, name, address, image, date, tags, logo }: DashboardCfpType =
    props.cfp;

  const [isOpen, setIsOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleDeleteCfp = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/cfps/delete-cfp`, {
        method: 'POST',
        body: JSON.stringify(_id),
      }).then((response) => response.json());
      if (res.success) {
        props.setDeleteId(_id);
        setInitialLoading(false);
        closeModal();
        toast.success('Cfp deleted successfully', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      } else {
        toast.error(res.message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please Try Again', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      });
    }
  };
  return (
    <div className="cfp-card group relative h-[250px] cursor-pointer overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-rose-500">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="to-black-black/70 absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/70 p-2 hover:from-[rgb(231,65,123)] group-focus:to-primary">
        <div className="text-center">
          <button>Edit</button>
          <button onClick={openModal}>Delete</button>
          {logo && (
            <Image
              src={image}
              alt={name}
              height={80}
              width={80}
              className="mb-2 inline-block"
              loading="lazy"
            />
          )}
          <h3 className="text-3xl font-bold text-white">{name}</h3>
          <h4 className="mt-5 text-base text-white">
            <span className="block">
              {new Date(date).toLocaleString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="block">
              {!address.isOnline && address.location}
            </span>
          </h4>
          <div className="grow">
            <ul className="mb-3 flex list-inside list-disc flex-wrap text-color-pink">
              {tags.map((tag: string, index: number) => (
                <li key={index} className="px-2 py-1 text-sm capitalize">
                  <span className="text-foreground">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            closeButton={false}
          />
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Delete Cfps
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Do you want to delete {name}?
                        </p>
                      </div>

                      <div className="mt-4 ml-20">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 mr-5 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          No
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => handleDeleteCfp()}
                        >
                          {initialLoading ? 'Loading' : 'Yes, I want'}
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default DashboardCfpCard;
