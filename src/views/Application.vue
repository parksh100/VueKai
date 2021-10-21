<template>
  <h2 class="mx-5 mt-3">인증심사신청</h2>
  <hr>
  <div class="container">
    <div class="form-floating mb-3">
      <select
        class="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
      >
        <option selected>선택하세요</option>
        <option value="1">최초심사</option>
        <option value="2">사후/갱신심사</option>
        <option value="3">전환 사후/갱신심사</option>
      </select>
      <label for="floatingSelect">심사유형</label>
    </div>

    <form class="form-floating mb-3 ">
      <input
        type="text"
        class="form-control"
        id="companyNameKor"
        placeholder="placeholder"
        value=""
      >
      <label for="companyNameKor">기업명(국문)</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="companyNameEng"
        placeholder="placeholder"
        value=""
      >
      <label for="companyNameEng">기업명(영문)</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="addressKor"
        placeholder="placeholder"
        value=""
      >
      <label for="addressKor">주소(국문)</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="addressEng"
        placeholder="placeholder"
        value=""
      >
      <label for="addressEng">주소(영문)</label>
      <a
        href="https://www.juso.go.kr/openIndexPage.do"
        target="_blank"
      ><small
          style="font-size: 8px;"
          class="mx-auto"
        >영문주소 조회서비스</small></a>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="ceoName"
        placeholder="placeholder"
        value=""
        required
      >
      <label for="ceoName">대표자명</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="ceoPhone"
        placeholder="placeholder"
        value=""
        required
      >
      <label for="ceoPhone">대표자 휴대전화번호</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="telephone"
        placeholder="0000-0000-0000"
        value=""
        required
      >
      <label for="telephone">대표전화번호</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="fax"
        placeholder="0000-0000-0000"
        value=""
        required
      >
      <label for="fax">대표팩스번호</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="0000-0000-0000"
        value=""
        required
      >
      <label for="email">이메일</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="chargedPerson"
        placeholder="0000-0000-0000"
        value=""
        required
      >
      <label for="chargedPerson">담당자명/직위</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="chargedPart"
        placeholder="0000-0000-0000"
        value=""
        required
      >
      <label for="chargedPart">담당부서</label>
    </form>

    <form class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="chargedPersonMobile"
        placeholder="0000-0000-0000"
        value=""
        required
      >
      <label for="chargedPersonMobile">담당자 휴대전화번호</label>
    </form>

  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
