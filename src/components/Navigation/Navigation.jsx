/* eslint-disable no-nested-ternary */
import React from 'react';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const paths = location.pathname.split('/');

  return (
    <div className="flex text-sm">
      {
            paths.map((path, index) => (
              index === 1 ? (path === ''
                ? (
                  <div className="flex">
                    <div key={index}>Data jamaah</div>
                    <div className="flex ml-2 gap-x-2">
                      <div>&gt;</div>
                      <div className="font-medium text-basic-blue">Lihat data</div>
                    </div>
                  </div>
                )
                : <div key={index}>{`Data ${path}`}</div>)
                : index === 2 ? (
                  <div key={index}>
                    { path === 'addData'
                      ? (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className={paths.length === 3 ? 'font-medium text-basic-blue' : ''}>Tambah data</div>
                        </div>
                      )
                      : path === 'listData' ? (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className={paths.length === 3 ? 'font-medium text-basic-blue ' : ''}>Lihat data</div>
                        </div>
                      ) : path === 'detailData' ? (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className="font-medium text-basic-blue">Detail data</div>
                        </div>
                      ) : path === 'editData' ? (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className="font-medium text-basic-blue">Edit data</div>
                        </div>
                      ) : (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className={paths.length === 3 ? 'font-medium text-basic-blue ' : ''}>{`Data ${path}`}</div>
                        </div>
                      )}
                  </div>
                ) : index === 3 ? (
                  <div key={index}>
                    { path === 'addData'
                      ? (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className={paths.length === 5 ? 'font-medium text-basic-blue' : ''}>Tambah data</div>
                        </div>
                      )
                      : path === 'listData' ? (
                        <div className="flex ml-2 gap-x-2">
                          <div>&gt;</div>
                          <div className={paths.length === 5 ? 'font-medium text-basic-blue ' : ''}>Lihat data</div>
                        </div>
                      ) : null }
                  </div>
                ) : null
            ))
        }
    </div>
  );
}

export default Navigation;
