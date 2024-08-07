/*amd /cm/udc/fileMultiUpload.xml 18641 f3dd417827ca3b075301fe10404d02df44f7e72a169834cbff5506c007881567 */
define({
  declaration: {
    A: {
      version: '1.0',
      encoding: 'UTF-8',
      standalone: 'no'
    }
  },
  E: [{
    T: 1,
    N: 'html',
    A: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      'xmlns:ev': 'http://www.w3.org/2001/xml-events',
      'xmlns:w2': 'http://www.inswave.com/websquare',
      'xmlns:xf': 'http://www.w3.org/2002/xforms'
    },
    E: [{
      T: 1,
      N: 'head',
      E: [{
        T: 1,
        N: 'w2:type',
        A: {
          palette: 'support'
        },
        E: [{
          T: 3,
          text: 'COMPONENT'
        }]
      }, {
        T: 1,
        N: 'w2:buildDate'
      }, {
        T: 1,
        N: 'w2:publicInfo',
        A: {
          method: 'scwin.setDataSeq,scwin.undoFileUpload,scwin.setFileUpload,scwin.getUpdatedFile,scwin.startFileUpload,scwin.setFileSelectingButtonDisabled,scwin.isModified',
          component: ''
        }
      }, {
        T: 1,
        N: 'xf:model',
        E: [{
          T: 1,
          N: 'w2:dataCollection',
          A: {
            baseNode: 'map'
          },
          E: [{
            T: 1,
            N: 'w2:dataList',
            A: {
              baseNode: 'list',
              'ev:onremoverow': 'scwin.dlt_file_onremoverow',
              id: 'dlt_file',
              repeatNode: 'map',
              saveRemovedData: 'true'
            },
            E: [{
              T: 1,
              N: 'w2:columnInfo',
              E: [{
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'chk',
                  name: '선택',
                  dataType: 'text',
                  ignoreStatus: 'true'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'FILE_SEQ',
                  name: '파일순번',
                  dataType: 'number'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'DATA_SEQ',
                  name: '데이터순번',
                  dataType: 'number'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'FILE_GRP_SEQ',
                  name: '파일그룹순번',
                  dataType: 'number'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'FILE_STORED_PATH',
                  name: '파일저장경로',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'STORED_FILE_NM',
                  name: '저장파일명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'ORIGIN_FILE_NM',
                  name: '원본파일명',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'FILE_SIZE',
                  name: '파일크기',
                  dataType: 'text'
                }
              }, {
                T: 1,
                N: 'w2:column',
                A: {
                  id: 'status',
                  name: '파일전송상태',
                  dataType: 'text'
                }
              }]
            }]
          }, {
            T: 1,
            N: 'w2:dataMap',
            A: {
              baseNode: 'map',
              id: 'dma_fileInfo'
            },
            E: [{
              T: 1,
              N: 'w2:keyInfo',
              E: [{
                T: 1,
                N: 'w2:key',
                A: {
                  dataType: 'text',
                  id: 'FILE_GRP_SEQ',
                  name: '파일그룹순번'
                }
              }]
            }, {
              T: 1,
              N: 'w2:data'
            }]
          }]
        }, {
          T: 1,
          N: 'w2:workflowCollection'
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            abortTrigger: '',
            action: '/file/saveFile',
            customHandler: '',
            encoding: 'UTF-8',
            errorHandler: '',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_saveFile_submitdone',
            'ev:submiterror': '',
            id: 'sbm_saveFile',
            instance: '',
            mediatype: 'application/json',
            method: 'post',
            mode: 'asynchronous',
            processMsg: '',
            ref: 'data:json,{"action":"modified","id":"dlt_file"}',
            replace: '',
            target: ''
          }
        }, {
          T: 1,
          N: 'xf:submission',
          A: {
            abortTrigger: '',
            action: '/file/selectFile',
            customHandler: '',
            encoding: 'UTF-8',
            errorHandler: '',
            'ev:submit': '',
            'ev:submitdone': 'scwin.sbm_selectFile_submitdone',
            'ev:submiterror': '',
            id: 'sbm_selectFile',
            instance: '',
            mediatype: 'application/json',
            method: 'post',
            mode: 'asynchronous',
            processMsg: '',
            ref: 'data:json,dma_fileInfo',
            replace: '',
            target: ''
          }
        }]
      }, {
        T: 1,
        N: 'script',
        A: {
          lazy: 'false',
          type: 'text/javascript'
        },
        E: [{
          T: 4,
          cdata: function cdata(scopeObj) {
            with (scopeObj) {
              scwin.onpageload = function () {
                var option = $p.getOptions({
                  maxFileCount: 10,
                  maxFileSize: 536870912,
                  totalFileSize: 2009715200,
                  subDir: '',
                  filter: 'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',
                  fileGrpSeq: 0
                });
                scwin.setFileUpload(option);
                scwin.setFileStatus();
                scwin.setDropEventHandler();
                com.util.setGridViewDelCheckBox($p, grd_file);
              };
              scwin.callbackFileUploadSetting = function () {
                var filter = '';
                if (com.util.isEmpty($p, scwin.option.filter) === false) {
                  var extArr = scwin.option.filter.split(',');
                  for (var idx in extArr) {
                    filter += '*.' + extArr[idx].trim() + ';';
                  }
                } else {
                  filter = '*.*';
                }
                mpd_multiFileUpload.setFilter('Filter', filter);
                if (com.num.parseInt($p, scwin.option.fileGrpSeq) > 0) {
                  dma_fileInfo.set('FILE_GRP_SEQ', scwin.option.fileGrpSeq);
                  mpd_multiFileUpload.removeAllFiles();
                } else {
                  mpd_multiFileUpload.removeAllFiles();
                  dlt_file.removeAll();
                  scwin.setFileStatus();
                }
              };
              scwin.setDropEventHandler = function () {
                var fileDragDom = grd_file.render;
                fileDragDom.addEventListener('dragover', scwin.doHandleDrop, false);
                fileDragDom.addEventListener('dragenter', scwin.doHandleDrop, false);
                fileDragDom.addEventListener('dragleave', scwin.doHandleDrop, false);
                fileDragDom.addEventListener('drop', scwin.doHandleDrop, false);
              };
              scwin.doHandleDrop = function (e) {
                try {
                  WebSquare.event.stopEvent(e);
                  var fileData = e.dataTransfer.files;
                  var uploadFileData = [];
                  for (var idx = 0; idx < fileData.length; idx++) {
                    var isExisted = false;
                    for (var fileIdx in mpd_multiFileUpload.fileArray) {
                      if (fileData[idx].name === mpd_multiFileUpload.fileArray[fileIdx].name) {
                        isExisted = true;
                      }
                    }
                    if (isExisted === false) {
                      uploadFileData.push(fileData[idx]);
                      mpd_multiFileUpload.fileArray.push(fileData[idx]);
                      mpd_multiFileUpload.fileNameArr.push(fileData[idx].name);
                      mpd_multiFileUpload._inx++;
                    }
                  }
                  scwin.selectCallback(uploadFileData);
                  console.table(mpd_multiFileUpload.fileArray);
                } catch (ex) {
                  console.error(ex);
                }
              };
              scwin.setFileStatus = function () {
                var fileInfo = scwin.getCurrentFileInfo();
                tbx_fileCount.setValue(fileInfo.fileCount + ' / ' + scwin.option.maxFileCount);
                tbx_fileSize.setValue(com.num.formatByte($p, fileInfo.fileSize) + ' / ' + com.num.formatByte($p, scwin.option.totalFileSize));
              };
              scwin.selectCallback = function (data) {
                var isValid = true;
                var fileInfo = scwin.getCurrentFileInfo();
                var newFileInfo = {
                  fileCount: 0,
                  fileSize: 0
                };
                for (var idx in data) {
                  if (scwin.maxFileSize < data[idx].size) {
                    var alertMsg = com.data.getMessage($p, 'MSG_CM_00007', data[idx].name, com.num.formatByte($p, scwin.maxFileSize));
                    com.win.alert($p, alertMsg);
                    mpd_multiFileUpload.removeFile(data[idx].name);
                    delete data[idx];
                  } else {
                    newFileInfo.fileCount++;
                    newFileInfo.fileSize += data[idx].size;
                  }
                }
                if (scwin.maxFileCount < fileInfo.fileCount + newFileInfo.fileCount) {
                  var alertMsg = com.data.getMessage($p, 'MSG_CM_00008', scwin.option.maxFileCount);
                  com.win.alert($p, alertMsg);
                  isValid = false;
                }
                if (scwin.totalFileSize < fileInfo.fileSize + newFileInfo.fileSize && isValid === true) {
                  var alertMsg = com.data.getMessage($p, 'MSG_CM_00009', com.num.formatByte($p, scwin.option.totalFileSize));
                  com.win.alert($p, alertMsg);
                  isValid = false;
                }
                if (isValid === false) {
                  for (var idx in data) {
                    mpd_multiFileUpload.removeFile(data[idx].name);
                  }
                  return;
                }
                if (data.length > 0) {
                  var newFileCount = data.length;
                  var fileInfoList = [];
                  for (var idx in data) {
                    var fileInfo = {
                      'FILE_SEQ': scwin.fileId,
                      'ORIGIN_FILE_NM': data[idx].name,
                      'FILE_SIZE': data[idx].size
                    };
                    fileInfoList.push(fileInfo);
                  }
                  var lastIdx = dlt_file.getRowCount();
                  var totalFileCount = lastIdx + fileInfoList.length;
                  dlt_file.insertJSON(lastIdx, fileInfoList);
                  for (var idx = lastIdx; idx < totalFileCount; idx++) {
                    grd_file.setCellClass(idx, 'status', 'progress');
                  }
                  grd_file.setFocusedCell(totalFileCount - 1, 'FILE_SEQ', false);
                }
                scwin.setFileStatus();
              };
              scwin.getCurrentFileInfo = function () {
                var fileInfo = {
                  fileCount: 0,
                  fileSize: 0
                };
                var fileList = dlt_file.getAllJSON();
                for (var idx in fileList) {
                  var rowStatus = fileList[idx].rowStatus;
                  if (rowStatus === 'C' || rowStatus === 'U' || rowStatus === 'R') {
                    fileInfo.fileCount++;
                    fileInfo.fileSize += com.num.parseInt($p, fileList[idx].FILE_SIZE);
                  }
                }
                ;
                return fileInfo;
              };
              scwin.clearFiles = function () {
                dlt_file.removeAll();
                mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
              };
              scwin.mpd_multiFileUpload_onprogress = function (data) {
                var rowIdx = dlt_file.getMatchedIndex('ORIGIN_FILE_NM', data.fileName);
                for (var idx = 0; idx < rowIdx.length; idx++) {
                  var fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
                  if (fileInfo.rowStatus === 'C' && com.util.isEmpty($p, fileInfo.fileId) === true) {
                    if (data.percentData < 100) {
                      dlt_file.setCellData(rowIdx[idx], 'status', data.percentData);
                    } else {
                      dlt_file.setCellData(rowIdx[idx], 'status', 'S');
                    }
                  }
                }
              };
              scwin.mpd_multiFileUpload_ondone = function (data) {
                var newFileCount = data.length;
                for (var fileIdx = 0; fileIdx < newFileCount; fileIdx++) {
                  var rowIdx = dlt_file.getMatchedIndex('ORIGIN_FILE_NM', data[fileIdx].localFile);
                  dlt_file.setBroadcast(false);
                  for (var idx = 0; idx < rowIdx.length; idx++) {
                    var fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
                    if (fileInfo.rowStatus === 'C' && fileInfo.status === gcm.MESSAGE_CODE.STATUS_SUCCESS) {
                      dlt_file.setCellData(rowIdx[idx], 'DATA_SEQ', scwin.option.dataSeq);
                      dlt_file.setCellData(rowIdx[idx], 'FILE_GRP_SEQ', scwin.option.fileGrpSeq);
                      dlt_file.setCellData(rowIdx[idx], 'FILE_STORED_PATH', scwin.option.subDir);
                      dlt_file.setCellData(rowIdx[idx], 'STORED_FILE_NM', data[fileIdx].file);
                      dlt_file.setCellData(rowIdx[idx], 'FILE_SIZE', data[fileIdx].size);
                      grd_file.refreshCell(rowIdx[idx], 'ORIGIN_FILE_NM');
                    }
                  }
                  dlt_file.setBroadcast(true, true);
                }
                scwin.saveFileInfo();
              };
              scwin.setDisplayStatus = function (value) {
                if (value === 'S') {
                  return 'Completed';
                } else if (value === 'E') {
                  return 'Error';
                } else if (com.num.parseInt($p, value) > 0 && com.num.parseInt($p, value) < 100) {
                  return '<div style=\'width:' + value + '%; height:100%;\' class=\'div_progress\'>' + value + '%</div>';
                } else {
                  return '<div style=\'width:0%; height:100%;\' class=\'div_progress\'></div>';
                }
              };
              scwin.dlt_file_onremoverow = function (info) {
                for (var idx in info.removedDataObj) {
                  var fileName = info.removedDataObj[idx][6];
                  mpd_multiFileUpload.removeFile(fileName);
                }
                scwin.setFileStatus();
              };
              scwin.customFormatterFileNm = function (data, formattedData, rowIndex, colIndex) {
                var fileSeq = dlt_file.getCellData(rowIndex, 'FILE_SEQ');
                var fileGrpSeq = dlt_file.getCellData(rowIndex, 'FILE_GRP_SEQ');
                if (com.util.isEmpty($p, fileSeq) === false) {
                  return '<a href=\'' + gcm.CONTEXT_PATH + gcm.FILE_DOWNLOAD_URL + fileSeq + '\' target=\'_blank\'>' + formattedData + '</a>';
                } else {
                  return formattedData;
                }
              };
              scwin.displayFileSize = function (value) {
                return com.num.formatByte($p, value);
              };
              scwin.sbm_saveFile_submitdone = function (e) {
                if (e.responseJSON.rsMsg.statusCode === gcm.MESSAGE_CODE.STATUS_SUCCESS) {
                  var fileList = e.responseJSON.dlt_file;
                  var rowCount = dlt_file.getRowCount();
                  for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
                    if (dlt_file.getRowStatus(rowIdx) === 'C') {
                      for (var fileIdx in fileList) {
                        if (dlt_file.getCellData(rowIdx, 'STORED_FILE_NM') === fileList[fileIdx].STORED_FILE_NM) {
                          dlt_file.setCellData(rowIdx, 'FILE_SEQ', fileList[fileIdx].FILE_SEQ);
                          dlt_file.modifyRowStatus(rowIdx, 'R');
                          grd_file.refreshCell(rowIdx, 'ORIGIN_FILE_NM');
                          grd_file.setFocusedCell(rowIdx, 'ORIGIN_FILE_NM');
                        }
                      }
                    }
                  }
                  scwin.setFileStatus();
                  dlt_file.removeRows(dlt_file.getDeletedIndex());
                  dlt_file.reform();
                  $p.emit('onFileUploadDone', true);
                } else {
                  scwin.setFileStatus();
                  $p.emit('onFileUploadDone', false);
                }
              };
              scwin.sbm_selectFile_submitdone = function (e) {
                if (e.responseJSON.dlt_file.length >= 0) {
                  dlt_file.setJSON(e.responseJSON.dlt_file);
                  scwin.setFileStatus();
                }
                mpd_multiFileUpload.removeAllFiles();
              };
              scwin.setUploadParam = function () {
                mpd_multiFileUpload.setParam(0, 'subDir', scwin.option.subDir);
                var fileCount = mpd_multiFileUpload.getFileCount();
                for (var idx = 1; idx <= fileCount; idx++) {
                  mpd_multiFileUpload.setParam(idx, 'FILE_GRP_SEQ', scwin.option.fileGrpSeq);
                }
              };
              scwin.mpd_multiFileUpload_onerror = function (data) {
                com.win.alert($p, '파일 업로드에 실패했습니다.');
              };
              scwin.setDataSeq = function (dataSeq) {
                if (com.util.isEmpty($p, dataSeq) === false) {
                  scwin.option.dataSeq = dataSeq;
                  var searchParam = {
                    dma_search: {
                      DATA_SEQ: dataSeq,
                      IS_DELETE: 'N'
                    }
                  };
                  com.sbm.execute($p, sbm_selectFile, searchParam);
                } else {
                  scwin.option.dataSeq = 0;
                  scwin.clearFiles();
                }
              };
              scwin.undoFileUpload = function (dataSeq) {
                dlt_file.undoAll();
                dlt_file.removeRows(dlt_file.getInsertedIndex());
                mpd_multiFileUpload.removeAllFiles();
              };
              scwin.setFileUpload = function (option) {
                scwin.option = {};
                try {
                  if (com.util.isEmpty($p, option.fileGrpSeq) === false) {
                    scwin.option.fileGrpSeq = option.fileGrpSeq;
                  } else {
                    scwin.option.fileGrpSeq = 0;
                  }
                  scwin.option.maxFileCount = option.maxFileCount;
                  scwin.option.maxFileSize = option.maxFileSize;
                  scwin.option.totalFileSize = option.totalFileSize;
                  if (com.util.isEmpty($p, option.filter) == false) {
                    scwin.option.filter = option.filter;
                  }
                  mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
                  mpd_multiFileUpload.setMaxFileSize(scwin.option.maxFileSize);
                  if (typeof option.subDir !== 'undefined') {
                    scwin.option.subDir = option.subDir;
                  }
                  scwin.setFileSelectingButtonDisabled(true);
                  scwin.callbackFileUploadSetting();
                } catch (ex) {
                  console.error(ex);
                }
              };
              scwin.startFileUpload = function () {
                try {
                  if (mpd_multiFileUpload.getFileInfos().length > 0) {
                    scwin.setUploadParam();
                    mpd_multiFileUpload.startUpload();
                  } else {
                    scwin.saveFileInfo();
                  }
                } catch (ex) {
                  console.error(ex);
                }
              };
              scwin.getUpdatedFile = function (option) {
                return dlt_file.getModifiedJSON({
                  saveRemovedData: false
                });
              };
              scwin.setFileSelectingButtonDisabled = function (status) {
                btn_fileSelecting.setDisabled(status);
                mpd_multiFileUpload.setDisabled(status);
              };
              scwin.isModified = function () {
                return com.data.isModified($p, dlt_file);
              };
              scwin.saveFileInfo = function () {
                if (com.data.isModified($p, dlt_file)) {
                  com.sbm.execute($p, sbm_saveFile);
                } else {
                  $p.emit('onFileUploadDone', true);
                }
              };
            }
          }
        }]
      }]
    }, {
      T: 1,
      N: 'body',
      A: {
        'ev:onpageload': 'scwin.onpageload'
      },
      E: [{
        T: 1,
        N: 'xf:group',
        A: {
          "class": '',
          id: '',
          style: 'width:100%;height:240px;'
        },
        E: [{
          T: 1,
          N: 'xf:group',
          A: {
            "class": 'dfbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'xf:group',
            A: {
              id: '',
              "class": 'fl'
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'btn_cm  row_add',
                "for": 'mpd_multiFileUpload',
                id: 'btn_fileSelecting',
                label: '추가',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:multiupload',
              A: {
                'ev:onComplete': '',
                maxcount: '',
                'ev:onprogress': 'scwin.mpd_multiFileUpload_onprogress',
                fireEventOnError: '',
                filter: '',
                mode: 'html5_transparent',
                'ev:ondone': 'scwin.mpd_multiFileUpload_ondone',
                'ev:onerror': 'scwin.mpd_multiFileUpload_onerror',
                displaySizeUnit: 'MB',
                action: '',
                style: '',
                wmode: 'false',
                id: 'mpd_multiFileUpload',
                maxsize: '1000000000',
                uploadButton: '',
                selectCallback: 'scwin.selectCallback'
              }
            }]
          }, {
            T: 1,
            N: 'xf:group',
            A: {
              "class": 'fr mt10',
              id: '',
              style: ''
            },
            E: [{
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'ett',
                id: '',
                label: '파일 수 :',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": '',
                id: 'tbx_fileCount',
                label: '0개/ 10개',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": 'ett',
                id: '',
                label: '총 용량 :',
                style: ''
              }
            }, {
              T: 1,
              N: 'w2:textbox',
              A: {
                "class": '',
                id: 'tbx_fileSize',
                label: '0MB / 200MB',
                style: ''
              }
            }]
          }]
        }, {
          T: 1,
          N: 'xf:group',
          A: {
            adaptiveThreshold: '',
            "class": 'gvwbox',
            id: '',
            style: ''
          },
          E: [{
            T: 1,
            N: 'w2:gridView',
            A: {
              autoFit: 'allColumn',
              "class": 'wq_gvw multi_file',
              dataList: 'data:dlt_file',
              defaultCellHeight: '26',
              disabledScrollHidden: '',
              'ev:oncellclick': '',
              'ev:onheaderclick': '',
              focusMode: 'row',
              id: 'grd_file',
              rowNumVisible: '',
              rowNumWidth: '',
              rowStatusHeaderValue: '상태',
              rowStatusVisible: 'true',
              rowStatusWidth: '',
              scrollByColumn: 'false',
              scrollByColumnAdaptive: 'false',
              sortable: 'true',
              style: 'height:150px;',
              visibleRowNum: '5',
              wheelRows: '0',
              readOnlyTabIgnore: '',
              summary: '',
              readOnlyBackgroundImgCSS: '',
              autoFitMinWidth: '800'
            },
            E: [{
              T: 1,
              N: 'w2:caption',
              A: {
                id: 'caption1',
                style: '',
                value: 'this is a grid caption.'
              }
            }, {
              T: 1,
              N: 'w2:header',
              A: {
                id: 'header1',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row1',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    fixColumnWidth: 'true',
                    id: 'chk',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '선택',
                    width: '40',
                    checkboxLabel: '선택'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column11',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '파일명',
                    width: '350'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column14',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '전송결과',
                    width: '100'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'column7',
                    inputType: 'text',
                    removeBorderStyle: 'false',
                    style: '',
                    value: '파일크기',
                    width: '100'
                  }
                }]
              }]
            }, {
              T: 1,
              N: 'w2:gBody',
              A: {
                id: 'gBody1',
                style: ''
              },
              E: [{
                T: 1,
                N: 'w2:row',
                A: {
                  id: 'row2',
                  style: ''
                },
                E: [{
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayMode: 'label',
                    id: 'chk',
                    inputType: 'checkbox',
                    removeBorderStyle: 'false',
                    width: '30',
                    checkboxLabel: '선택'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    customFormatter: 'scwin.customFormatterFileNm',
                    displayMode: 'label',
                    id: 'ORIGIN_FILE_NM',
                    inputType: 'text',
                    readOnly: 'true',
                    removeBorderStyle: 'false',
                    textAlign: 'left',
                    width: '350'
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    "class": 'progress',
                    dataType: '',
                    displayFormatter: 'scwin.setDisplayStatus',
                    displayMode: 'label',
                    expression: '',
                    id: 'status',
                    inputType: 'text',
                    readOnly: 'true',
                    removeBorderStyle: 'false',
                    width: '100',
                    style: ''
                  }
                }, {
                  T: 1,
                  N: 'w2:column',
                  A: {
                    blockSelect: 'false',
                    displayFormatter: 'scwin.displayFileSize',
                    displayMode: 'label',
                    id: 'FILE_SIZE',
                    inputType: 'text',
                    readOnly: 'true',
                    removeBorderStyle: 'false',
                    textAlign: 'right',
                    width: '100'
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }]
});