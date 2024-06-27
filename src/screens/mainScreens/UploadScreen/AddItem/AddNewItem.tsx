import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../../../../custom_comp/CustomInput';
import { CustomButton } from '../../../../custom_comp/CustomButton';
import CustomImagePicker from '../../../../custom_comp/CustomImagePicker';
import CustomRadio from '../../../../custom_comp/CustomRadio';
import CustomSelectInput from '../../../../custom_comp/CustomSelectInput';
import { ScrollView } from 'react-native';

const AddNewItem = () => {
  return (
    <View>
      <View>
        <View>
          <CustomSelectInput
            label="Brand *"
            itemSelected={"select brand"}
            selected={selected?.name}
            setOpenDropDown={setOpenDropDown}
            openDropDown={openDropDown}
          />
          {openDropDown && (
            <ScrollView className="border border-[#E8E8E8] p-3  rounded-lg h-48 ">
              <>
                {data?.map((item, index) => (
                  <CustomSelectDropDown
                    key={index}
                    value={item?.name}
                    // image={item?.airtimeProvider?.icon}
                    onPress={() => handleItemPress(item)}
                  />
                ))}
              </>
            </ScrollView>
          )}
        </View>

        <View>
          <CustomSelectInput
            label="Model *"
            itemSelected={"select brand"}
            selected={selected?.name}
            setOpenDropDown={setOpenDropDown}
            openDropDown={openDropDown}
          />
          {openDropDown && (
            <ScrollView className="border border-[#E8E8E8] p-3  rounded-lg h-48 ">
              <>
                {data?.map((item, index) => (
                  <CustomSelectDropDown
                    key={index}
                    value={item?.name}
                    // image={item?.airtimeProvider?.icon}
                    onPress={() => handleItemPress(item)}
                  />
                ))}
              </>
            </ScrollView>
          )}
        </View>
        <Text className="text-xs">
          *If you can't find reference of your bag{" "}
          <Text className="text-xs text-blue-500">click here</Text>
        </Text>
      </View>

      <View>
        <CustomSelectInput
          label="Color *"
          itemSelected={"select color"}
          selected={selected?.name}
          setOpenDropDown={setOpenDropDown}
          openDropDown={openDropDown}
        />
        {openDropDown && (
          <ScrollView className="border border-[#E8E8E8] p-3  rounded-lg h-48 ">
            <>
              {data?.map((item, index) => (
                <CustomSelectDropDown
                  key={index}
                  value={item?.name}
                  // image={item?.airtimeProvider?.icon}
                  onPress={() => handleItemPress(item)}
                />
              ))}
            </>
          </ScrollView>
        )}
      </View>

      <View className=" flex-row flex-1 ">
        <View className=" flex-1">
          <Text className="text-sm text-[#23232399] my-2">Size</Text>
          <CustomRadio
            options={sizeData}
            checkedValue={size}
            onChange={setSize}
            style={{ marginBottom: 15 }}
          />
        </View>

        <View className=" flex-1">
          <Text className="text-sm text-[#23232399] my-2">Gender</Text>
          <CustomRadio
            options={genderData}
            checkedValue={gender}
            onChange={setGender}
            style={{ marginBottom: 15 }}
          />
        </View>
      </View>

      <View className=" flex-row flex-1 ">
        <View className=" flex-1">
          <Text className="text-sm text-[#23232399] my-2">Condition</Text>
          <CustomRadio
            options={conditionData}
            checkedValue={condition}
            onChange={setCondition}
            style={{ marginBottom: 15 }}
          />
        </View>

        <View className=" flex-1">
          <Text className="text-sm text-[#23232399] my-2">
            Purchased Receipt
          </Text>
          <CustomRadio
            options={receiptData}
            checkedValue={receipt}
            onChange={setReceipt}
            style={{ marginBottom: 15 }}
          />
        </View>
      </View>

      <View className=" flex-1 ">
        <Text className="text-sm text-[#23232399]">Add Photo</Text>
        <View className=" flex-1 flex-row justify-between">
          <View className="flex-1">
            <CustomImagePicker
              // label="Add Photo"
              style={{
                backgroundColor: "#FCFCFD",
                marginTop: 8,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                height: 120,
                borderWidth: 1,
                borderColor: "#D3D3D3",
              }}
              style2={{
                flexDirection: "row",
                alignItems: "center",
              }}
              // itemUriName={authUser?.vehicle_details?.insurance_policy}
              // uploadImage={onFileInsPolicy}
              // pickDocument={InsurancePickDoc}
              // documentUri={InsuranceDocUr}
              // removeImage={InsuranceRemoveImg}
              // isLoadingItem={InsurancePolicyPending}
              // isErrorItem={InsurancePolicyError}
              // removeImageData={InsuranceResetData}
              icon={<AntDesign name="plus" size={30} color="#23232399" />}
              // message="Upload Image/Pdf"
            />
          </View>

          <View className="flex-1">
            <CustomImagePicker
              // label="Add Photo"
              style={{
                backgroundColor: "#FCFCFD",
                marginTop: 8,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                height: 120,
                borderWidth: 1,
                borderColor: "#D3D3D3",
              }}
              style2={{
                flexDirection: "row",
                alignItems: "center",
              }}
              // itemUriName={authUser?.vehicle_details?.insurance_policy}
              // uploadImage={onFileInsPolicy}
              // pickDocument={InsurancePickDoc}
              // documentUri={InsuranceDocUr}
              // removeImage={InsuranceRemoveImg}
              // isLoadingItem={InsurancePolicyPending}
              // isErrorItem={InsurancePolicyError}
              // removeImageData={InsuranceResetData}
              icon={<AntDesign name="plus" size={30} color="#23232399" />}

              // message="Upload Image/Pdf"
            />
          </View>

          <View className="flex-1">
            <CustomImagePicker
              // label="Add Photo"
              style={{
                backgroundColor: "#FCFCFD",
                marginTop: 8,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                height: 120,
                borderWidth: 1,
                borderColor: "#D3D3D3",
              }}
              style2={{
                flexDirection: "row",
                alignItems: "center",
              }}
              // itemUriName={authUser?.vehicle_details?.insurance_policy}
              // uploadImage={onFileInsPolicy}
              // pickDocument={InsurancePickDoc}
              // documentUri={InsuranceDocUr}
              // removeImage={InsuranceRemoveImg}
              // isLoadingItem={InsurancePolicyPending}
              // isErrorItem={InsurancePolicyError}
              // removeImageData={InsuranceResetData}
              icon={<AntDesign name="plus" size={30} color="#23232399" />}
              // message="Upload Image/Pdf"
            />
          </View>

          <View className="flex-1">
            <CustomImagePicker
              // label="Add Photo"
              style={{
                backgroundColor: "#FCFCFD",
                marginTop: 8,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                height: 120,
                borderWidth: 1,
                borderColor: "#D3D3D3",
              }}
              style2={{
                flexDirection: "row",
                alignItems: "center",
              }}
              // itemUriName={authUser?.vehicle_details?.insurance_policy}
              // uploadImage={onFileInsPolicy}
              // pickDocument={InsurancePickDoc}
              // documentUri={InsuranceDocUr}
              // removeImage={InsuranceRemoveImg}
              // isLoadingItem={InsurancePolicyPending}
              // isErrorItem={InsurancePolicyError}
              // removeImageData={InsuranceResetData}
              icon={<AntDesign name="plus" size={30} color="#23232399" />}
              // message="Upload Image/Pdf"
            />
          </View>
        </View>
      </View>

      <View className=" ">
        <View className=" border border-[#222]">
          <CustomInput label="Description" />
        </View>
        <View className="my-5">
          <CustomButton primary title="save" />
        </View>
      </View>
    </View>
  );
}

export default AddNewItem