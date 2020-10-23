<template>
  <div style="padding-bottom: 1rem;">
    <div style="border-bottom:0.01rem solid #f8f8f8;padding:0.2rem 0;">
      <div
        style="padding:0 0.2rem;border-left: 0.1rem solid #888;width: 90%;margin: 0 auto;"
      >
        基础信息
      </div>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="schoolname"
          name="学校名称"
          label="学校名称"
          placeholder="输入学校名称"
          :rules="[{ required: true, message: '请填写学校名称' }]"
        />
        <van-field
          readonly
          clickable
          name="area"
          :value="area"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-field
          v-model="address"
          name="详细地址"
          label="详细地址"
          placeholder="请输入详细地址"
          :rules="[{ required: true, message: '请填写详细地址' }]"
        />
        <van-field
          readonly
          clickable
          name="organization"
          :value="organization"
          label="所属组织"
          placeholder="点击选择所属组织"
          @click="showOrganization = true"
        />
        <van-field
          readonly
          clickable
          name="platform"
          :value="platform"
          label="所属平台"
          placeholder="点击选择所属平台"
          @click="showPlatform = true"
        />
        <van-field
          v-model="gardenName"
          name="园长姓名"
          label="园长姓名"
          placeholder="输入园长姓名"
          :rules="[{ required: true, message: '请填写园长姓名' }]"
        />
        <van-field
          v-model="gardenPhone"
          name="园长手机号"
          label="园长手机号"
          type="tel"
          maxlength="13"
          placeholder="输入园长手机号"
          :rules="[{ required: true, message: '请填写园长手机号' }]"
        />
        <van-field
          v-model="website"
          name="学校官网"
          label="学校官网"
          placeholder="输入学校官网"
          :rules="[{ required: true, message: '请填写学校官网' }]"
        />
        <van-field
          v-model="scale"
          name="学校规模"
          label="学校规模"
          placeholder="输入学校规模"
          :rules="[{ required: true, message: '请填写学校规模' }]"
        />
        <van-field
          v-model="standard"
          name="收费标准"
          label="收费标准"
          placeholder="输入收费标准"
          :rules="[{ required: true, message: '请填写收费标准' }]"
        />
        <van-field
          readonly
          clickable
          name="nature"
          :value="nature"
          label="园所性质"
          placeholder="点击选择园所性质"
          @click="shownature = true"
        />
        <van-field
          readonly
          clickable
          name="collection"
          :value="collection"
          label="月均托费"
          placeholder="点击月均托费"
          @click="showCollection = true"
        />
        <van-field name="radio" label="是否有办园许可证">
            <template #input>
                <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">有</van-radio>
                <van-radio name="2">没有</van-radio>
                </van-radio-group>
            </template>
        </van-field>
        <van-field
            v-model="describe"
            rows="2"
            autosize
            label="描述"
            type="textarea"
            maxlength="50"
            placeholder="请输入描述信息"
            show-word-limit
            />



        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onConfirm"
        @cancel="showArea = false"
      />
    </van-popup>
    <van-popup v-model="showOrganization" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsOrganization"
        @confirm="onConfirmOrganization"
        @cancel="showOrganization = false"
      />
    </van-popup>
    <van-popup v-model="showPlatform" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsPlatform"
        @confirm="onConfirmPlatform"
        @cancel="showPlatform = false"
      />
    </van-popup>
    <van-popup v-model="shownature" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsNature"
        @confirm="onConfirmNature"
        @cancel="shownature = false"
      />
    </van-popup>
    <van-popup v-model="showCollection" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsCollection"
        @confirm="onConfirmCollection"
        @cancel="showCollection = false"
      />
    </van-popup>
  </div>
</template>
<script>
import { Form, Button, Field, Popup, Area, Picker, RadioGroup, Radio } from "vant";
import areaList from "../../assets/js/area";
export default {
  name: "Garden",
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Area.name]: Area,
    [Picker.name]: Picker,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
  data() {
    return {
      schoolname: "",
      area: "",
      showArea: false,
      areaList: areaList,
      address: "",
      showOrganization: false,
      columnsOrganization: ["个人", "公司"],
      organization: "",
      showPlatform:false,
      platform:'',
      columnsPlatform:['抖音','百度'],
      gardenName:'',
      gardenPhone:'',
      website:'',
      scale:'',
      standard:'',
      nature:'',
      shownature:false,
      columnsNature:['公办','私办'],
      showCollection:false,
      collection:'',
      columnsCollection:['1000以下','1000-2000','2000以上'],
      radio:'1',
      describe:''

    };
  },
  methods: {
    onConfirm(values) {
      this.area = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    onConfirmOrganization(values) {
      this.showOrganization = false;
      this.organization = values;
    },
    onConfirmPlatform(values) {
      this.showPlatform = false;
      this.platform = values;
    },
    onConfirmNature(values) {
      this.shownature = false;
      this.nature = values;
    },
    onConfirmCollection(values) {
      this.showCollection = false;
      this.collection = values;
    },
  },
};
</script>
