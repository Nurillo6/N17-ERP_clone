import { useEffect, useState, type Dispatch, type FC, type SetStateAction } from 'react';
import { Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { API } from '../hooks/getEnv';
import type { UpdateImgType } from '../types/UploadType';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const UploadImg: FC<{ setImage: Dispatch<SetStateAction<any>>, updateData?: UpdateImgType }> = ({ setImage, updateData }) => {
  const [fileList, setFileList] = useState<UploadFile[] | UpdateImgType[]>(updateData ? [updateData] : []);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImage(newFileList[0]?.response)
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {
    if (updateData) {
      setFileList([updateData])
    }
  }, [updateData])
  return (
    <ImgCrop rotationSlider>
      <Upload
        action={`${API}/file`}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Yuklash'}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImg;