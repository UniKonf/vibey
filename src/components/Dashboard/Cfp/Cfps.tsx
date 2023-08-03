import { DashboardCfpType } from '@/lib/types';

import { Heading } from '@/components';
import Button from '@/components/Buttons/Button';
import DashboardCfpCard from '@/components/Dashboard/Cfp/DashboardCfpCard';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DashboadCfpPage = () => {
  const [allCfpsData, setAllCfpsData] = useState<DashboardCfpType[]>([]);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [deleteId, setDeleteId] = useState<string>('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/cfps/allcfps`).then((response) =>
        response.json()
      );
      // console.log(res)
      if (res.success) {
        setAllCfpsData(res.cfps);
        setInitialLoading(false);
      }
    } catch (error) {
      toast.success('Something went wrong. Please Try Again', {
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
  useEffect(() => {
    setAllCfpsData((prevData) =>
      prevData.filter((data: DashboardCfpType) => data._id !== deleteId)
    );
  }, [deleteId]);

  return (
    <div className="relative z-10 rounded-3xl ">
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
      {initialLoading ? (
        <>loading</>
      ) : (
        <section className="layout flex flex-col gap-2 py-[100px]" id="add-Cfp">
          <div className="flex items-stretch">
            {' '}
            <Heading title="All Cfps" />
            <Button className="ml-20">Add Cfps</Button>
          </div>

          <div>
            {allCfpsData.length > 0 ? (
              <div className="events grid grid-cols-auto-sm gap-7">
                {allCfpsData.map((cfp: DashboardCfpType, index: number) => (
                  <DashboardCfpCard
                    cfp={cfp}
                    setDeleteId={setDeleteId}
                    key={index}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-base-100/70 px-6 py-5 text-center text-xl text-transparent md:pb-20 md:pt-14 ">
                <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text ">
                  No cfps created
                </span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default DashboadCfpPage;
