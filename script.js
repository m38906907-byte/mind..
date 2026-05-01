// --- 1. المتغيرات الأساسية (مخازن البيانات) ---
let cart = []; // مصفوفة فارغة لتخزين الملازم التي يضيفها المستخدم (تتكون من اسم وسعر)
let deliveryCost = 0; // متغير لتخزين قيمة التوصيل التي تتغير حسب المحافظة
let isDiscountActive = false; // حالة كود الخصم (مفعّل أو لا) — يُستخدم لإعادة الحساب تلقائياً

// --- 2. دالة التحقق من البيانات (الحارس) ---
function isDataValid() {
    // جلب القيم من حقول الإدخال باستخدام ID كل حقل
    // .value تجلب النص المكتوب | .trim() تمسح الفراغات الزائدة من البداية والنهاية
    let phone = document.getElementById('userPhone').value.trim();
    let phone2 = document.getElementById('userPhone2').value.trim();
    let city = document.getElementById('userCity').value; // المحافظة من القائمة (لا تحتاج تنظيف)
    let dist = document.getElementById('userDist').value.trim();

    // فحص الحقول الإجبارية: إذا كانت المحافظة غير مختارة أو الهاتف أو المنطقة فارغين
    if (city === "" || !phone || !dist) {
        alert("يرجى ملئ جميع الحقول (اختيار المحافظة، كتابة المنطقة، ورقم الهاتف)");
        return false; // إرجاع "خطأ" لإيقاف عملية الإرسال
    }

    // التأكد أن رقم الهاتف الأساسي يتكون من 11 رقم بالضبط
    if (phone.length !== 11) {
        alert("خطأ: رقم الهاتف الأساسي يجب أن يتكون من 11 رقم");
        return false;
    }

    // فحص رقم الهاتف الثاني: إذا كتب فيه المستخدم شيئاً، يجب أن يكون 11 رقم
    if (phone2 !== "" && phone2.length !== 11) {
        alert("خطأ: رقم الهاتف الإضافي يجب أن يكون 11 رقم أو اتركه فارغاً");
        return false;
    }

    return true; // إذا نجحت كل الفحوصات، يتم إرجاع "صح" للسماح بالإرسال
}

// --- 3. نظام البحث عن الأساتذة ---
function executeSearch() {
    // جلب النص المكتوب في خانة البحث
    let input = document.getElementById('userInput').value.trim();
    let resultsContainer = document.getElementById('results-container');

    // إخفاء جميع أقسام الأساتذة أولاً لتنظيف الشاشة قبل عرض النتيجة الجديدة
    document.querySelectorAll('.teacher-group').forEach(group => {
        group.style.display = 'none'; // تغيير حالة العرض إلى "مخفي"
    });

    // التحقق مما إذا كان النص المدخل يحتوي على اسم الأستاذ المطلوب
    if (input.includes("حيدر وليد")) {
        resultsContainer.style.display = 'grid'; // إظهار الحاوية الكبيرة بنظام الشبكة
        document.getElementById('haider-walid').style.display = 'contents'; // إظهار ملازم حيدر
        // تحريك المتصفح تلقائياً إلى مكان الملازم بحركة انسيابية هادئة
        document.getElementById('haider-walid').scrollIntoView({behavior: 'smooth'});
    }

    else if (input.includes("محمد العبيدي")) { 
        resultsContainer.style.display = 'grid';
        document.getElementById('mohammed-obaidi').style.display = 'contents';

        document.getElementById('mohammed-obaidi').scrollIntoView({behavior: 'smooth'});
    }

    else if (input.includes("عقيل الزبيدي")) { 
            resultsContainer.style.display = 'grid';
            document.getElementById('aqil-alzobaidi').style.display = 'contents';

            document.getElementById('aqil-alzobaidi').scrollIntoView({behavior: 'smooth'});
        }

    else if (input.includes("مؤيد سليم")) { 
                resultsContainer.style.display = 'grid';
                document.getElementById('moead-saleem').style.display = 'contents';

                document.getElementById('moead-saleem').scrollIntoView({behavior: 'smooth'});
            }

     else if (input.includes("خضر الظاهر")) { 
                    resultsContainer.style.display = 'grid';
                    document.getElementById('khoder').style.display = 'contents';

                    document.getElementById('khoder').scrollIntoView({behavior: 'smooth'});
                }

     else if (input.includes("حسين الهاشمي")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('hussien-al-hashmi').style.display = 'contents';

             document.getElementById('hussien-al-hashmi').scrollIntoView({behavior: 'smooth'});
         }

         else if (input.includes("محمد علي الكناني")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('mohamed-ali-al-kenani').style.display = 'contents';

              document.getElementById('mohamed-ali-al-kenani').scrollIntoView({behavior: 'smooth'});
          }

     else if (input.includes("احمد النعيمي")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('ahmed-al-noaemi').style.display = 'contents';

              document.getElementById('ahmed-al-noaemi').scrollIntoView({behavior: 'smooth'});
          }

    else if (input.includes("محمد قاسم")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('mhmd-qasm-math').style.display = 'contents';

                   document.getElementById('mhmd-qasm-math').scrollIntoView({behavior: 'smooth'});
               }

     else if (input.includes("سجاد العبيدي")) { 
                        resultsContainer.style.display = 'grid';
                        document.getElementById('sajad-obaidi').style.display = 'contents';

                        document.getElementById('sajad-obaidi').scrollIntoView({behavior: 'smooth'});
                    }

   else if (input.includes("حسين محمد")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('hussien-mohamed').style.display = 'contents';

             document.getElementById('hussien-mohamed').scrollIntoView({behavior: 'smooth'});
         }

   else if (input.includes("هاشم الغرباوي")) { 
            resultsContainer.style.display = 'grid';
            document.getElementById('hashim-al-garbaoi').style.display = 'contents';

            document.getElementById('hashim-al-garbaoi').scrollIntoView({behavior: 'smooth'});
        }

    else if (input.includes("شمس الادب")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('shams-al-adb').style.display = 'contents';

               document.getElementById('shams-al-adb').scrollIntoView({behavior: 'smooth'});
           }

    else if (input.includes("رفل الزبيدي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('rfl-al-zobaidi').style.display = 'contents';

               document.getElementById('rfl-al-zobaidi').scrollIntoView({behavior: 'smooth'});
           }

        else if (input.includes("زياد ماهر")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('zeayd-maher').style.display = 'contents';

               document.getElementById('zeayd-maher').scrollIntoView({behavior: 'smooth'});
           }

else if (input.includes("حسن عبد الكاظم")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('hassan-abd-al-kazim').style.display = 'contents';

               document.getElementById('hassan-abd-al-kazim').scrollIntoView({behavior: 'smooth'});
           }

else if (input.includes("مهند السوداني")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('mohanad-al-sodani').style.display = 'contents';

                   document.getElementById('mohanad-al-sodani').scrollIntoView({behavior: 'smooth'});
               }

else if (input.includes("علي السوداني")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('ali-al-sodani').style.display = 'contents';

           document.getElementById('ali-al-sodani').scrollIntoView({behavior: 'smooth'});
       }

  else if (input.includes("جعفر الحسني")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('jafar-al-hasani').style.display = 'contents';

           document.getElementById('jafar-al-hasani').scrollIntoView({behavior: 'smooth'});
       }

   else if (input.includes("عباس الدراجي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('abbas-al-dardgi').style.display = 'contents';

               document.getElementById('abbas-al-dardgi').scrollIntoView({behavior: 'smooth'});
           }

    else if (input.includes("نور الدين")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('noor-al-deen').style.display = 'contents';

              document.getElementById('noor-al-deen').scrollIntoView({behavior: 'smooth'});
          }

   else if (input.includes("ازل سلوان")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('azl-sloan').style.display = 'contents';

              document.getElementById('azl-sloan').scrollIntoView({behavior: 'smooth'});
          }

   else if (input.includes("عمار السلامي")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('amaar-al-salami').style.display = 'contents';

              document.getElementById('amaar-al-salami').scrollIntoView({behavior: 'smooth'});
          }

   else if (input.includes("احمد النداوي")) { 
                  resultsContainer.style.display = 'grid';
                  document.getElementById('ahmed-al-nedawi').style.display = 'contents';

                  document.getElementById('ahmed-al-nedawi').scrollIntoView({behavior: 'smooth'});
              }

  else if (input.includes("محمد النداوي")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('mohamed-al-nedawi').style.display = 'contents';

             document.getElementById('mohamed-al-nedawi').scrollIntoView({behavior: 'smooth'});
         }

    else if (input.includes("ماهر نايف")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('maher-naif').style.display = 'contents';

           document.getElementById('maher-naif').scrollIntoView({behavior: 'smooth'});
       }

   else if (input.includes("حسن فلاح")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('hasen-falah').style.display = 'contents';

               document.getElementById('hasen-falah').scrollIntoView({behavior: 'smooth'});
           }

   else if (input.includes("مصطفى الحافظ")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('mustafa-al-hafez').style.display = 'contents';

                   document.getElementById('mustafa-al-hafez').scrollIntoView({behavior: 'smooth'});
               }

    else if (input.includes("سالم منصور")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('salem-mansour').style.display = 'contents';

              document.getElementById('salem-mansour').scrollIntoView({behavior: 'smooth'});
          }

    else if (input.includes("نورا الدايني")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('nora-al-daeni').style.display = 'contents';

              document.getElementById('nora-al-daeni').scrollIntoView({behavior: 'smooth'});
          }

     else if (input.includes("فاضل الهاشمي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('fazel-al-hashmi').style.display = 'contents';

               document.getElementById('fazel-al-hashmi').scrollIntoView({behavior: 'smooth'});
           }

      else if (input.includes("حسين عبيدة")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('hussien-obeaida').style.display = 'contents';

               document.getElementById('hussien-obeaida').scrollIntoView({behavior: 'smooth'});
           }

     else if (input.includes("منتظر الخفاجي")) { 
                 resultsContainer.style.display = 'grid';
                 document.getElementById('montazar-al-khafagi').style.display = 'contents';

                 document.getElementById('montazar-al-khafagi').scrollIntoView({behavior: 'smooth'});
             }

         else if (input.includes("مؤمل مهدي")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('momal-mahdi').style.display = 'contents';

              document.getElementById('momal-mahdi').scrollIntoView({behavior: 'smooth'});
          }

       else if (input.includes("محمد حسين")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('mohamed-hussien').style.display = 'contents';

                   document.getElementById('mohamed-hussien').scrollIntoView({behavior: 'smooth'});
               }

       else if (input.includes("حسين حمزة")) { 
                  resultsContainer.style.display = 'grid';
                  document.getElementById('hussien-hamza').style.display = 'contents';

                  document.getElementById('hussien-hamza').scrollIntoView({behavior: 'smooth'});
              }

   else if (input.includes("سجاد حمزة")) { 
                 resultsContainer.style.display = 'grid';
                 document.getElementById('sajad-hamza').style.display = 'contents';

                 document.getElementById('sajad-hamza').scrollIntoView({behavior: 'smooth'});
             }
  else if (input.includes("احمد جبار الدايني")) { 
                    resultsContainer.style.display = 'grid';
                    document.getElementById('ahmed-gbar-al-daeni').style.display = 'contents';

                    document.getElementById('ahmed-gbar-al-daeni').scrollIntoView({behavior: 'smooth'});
                }

   else if (input.includes("ادم ابراهيم")) { 
          resultsContainer.style.display = 'grid';
          document.getElementById('adm-ibrahim').style.display = 'contents';

          document.getElementById('adm-ibrahim').scrollIntoView({behavior: 'smooth'});
      }

       else if (input.includes("عليم جوهر")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('alim-jaohar').style.display = 'contents';

             document.getElementById('alim-jaohar').scrollIntoView({behavior: 'smooth'});
         }

       else if (input.includes("حيدر عبد الائمة")) { 
                resultsContainer.style.display = 'grid';
                document.getElementById('haiedr-abd-al-aimma').style.display = 'contents';

                document.getElementById('haiedr-abd-al-aimma').scrollIntoView({behavior: 'smooth'});
            }

    else if (input.includes("محمد النوفلي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('mohamed-al-nofli').style.display = 'contents';

               document.getElementById('mohamed-al-nofli').scrollIntoView({behavior: 'smooth'});
           }

    else if (input.includes("علي الحطاب")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('ali-al-hadab').style.display = 'contents';

               document.getElementById('ali-al-hadab').scrollIntoView({behavior: 'smooth'});
           }

    else if (input.includes("ايات العاني")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('ayat-al-ani').style.display = 'contents';

                   document.getElementById('ayat-al-ani').scrollIntoView({behavior: 'smooth'});
               }

    else if (input.includes("نسرين البياتي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('nisreen-al-bayati').style.display = 'contents';

               document.getElementById('nisreen-al-bayati').scrollIntoView({behavior: 'smooth'});
           }

        else if (input.includes("هيام الراوي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('heyam-al-rawi').style.display = 'contents';

               document.getElementById('heyam-al-rawi').scrollIntoView({behavior: 'smooth'});
           }

        else if (input.includes("زياد الراوي")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('zeyad-al-rawi').style.display = 'contents';

                   document.getElementById('zeyad-al-rawi').scrollIntoView({behavior: 'smooth'});
               }

    else if (input.includes("ندى جاسم")) { 
                   resultsContainer.style.display = 'grid';
                   document.getElementById('nada-jassim').style.display = 'contents';

                   document.getElementById('nada-jassim').scrollIntoView({behavior: 'smooth'});
               }

   else if (input.includes("ميس وليد")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('mais-waleed').style.display = 'contents';

               document.getElementById('mais-waleed').scrollIntoView({behavior: 'smooth'});
           }

   else if (input.includes("محمد زياد")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('mohamed-zeaid').style.display = 'contents';

              document.getElementById('mohamed-zeaid').scrollIntoView({behavior: 'smooth'});
          }

       else if (input.includes("هشام المعموري")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('hisham-al-mamori').style.display = 'contents';

             document.getElementById('hisham-al-mamori').scrollIntoView({behavior: 'smooth'});
         }

   else if (input.includes("حمزة الجابري")) { 
                resultsContainer.style.display = 'grid';
                document.getElementById('hamza-al-gabri').style.display = 'contents';

                document.getElementById('hamza-al-gabri').scrollIntoView({behavior: 'smooth'});
            }

       else if (input.includes("نورس الموسوي")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('nawrs-al-mosaiw').style.display = 'contents';

           document.getElementById('nawrs-al-mosaiw').scrollIntoView({behavior: 'smooth'});
       }

    else if (input.includes("علا الصراف")) { 
                  resultsContainer.style.display = 'grid';
                  document.getElementById('ola-al-saraf').style.display = 'contents';

                  document.getElementById('ola-al-saraf').scrollIntoView({behavior: 'smooth'});
              }

        else if (input.includes("مضر الجبوري")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('modar-al-gbori').style.display = 'contents';

              document.getElementById('modar-al-gbori').scrollIntoView({behavior: 'smooth'});
          }
    else if (input.includes("احمد فوزي")) { 
                  resultsContainer.style.display = 'grid';
                  document.getElementById('ahmed-fawzi').style.display = 'contents';

                  document.getElementById('ahmed-fawzi').scrollIntoView({behavior: 'smooth'});
              }

    else if (input.includes("احمد حسان")) { 
                      resultsContainer.style.display = 'grid';
                      document.getElementById('ahmed-hassan').style.display = 'contents';

                      document.getElementById('ahmed-hassan').scrollIntoView({behavior: 'smooth'});
                  }

     else if (input.includes("احمد الجاف")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('ahmed-al-gaf').style.display = 'contents';

              document.getElementById('ahmed-al-gaf').scrollIntoView({behavior: 'smooth'});
          }

         else if (input.includes("قصي النداوي")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('qosai-al-nedawi').style.display = 'contents';

               document.getElementById('qosai-al-nedawi').scrollIntoView({behavior: 'smooth'});
           }

   else if (input.includes("دانيار الجاف")) { 
                    resultsContainer.style.display = 'grid';
                    document.getElementById('danear-al-gaf').style.display = 'contents';

                    document.getElementById('danear-al-gaf').scrollIntoView({behavior: 'smooth'});
                }

       else if (input.includes("مازن الهلالي")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('mazin-al-helaly').style.display = 'contents';

           document.getElementById('mazin-al-helaly').scrollIntoView({behavior: 'smooth'});
       }

   else if (input.includes("عمار فاضل")) { 
                  resultsContainer.style.display = 'grid';
                  document.getElementById('ammar-fazel').style.display = 'contents';

                  document.getElementById('ammar-fazel').scrollIntoView({behavior: 'smooth'});
              }

  else if (input.includes("ساجد العكيلي")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('sagd-al-akely').style.display = 'contents';

             document.getElementById('sagd-al-akely').scrollIntoView({behavior: 'smooth'});
         }

      else if (input.includes("سمر علي")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('smr-ali').style.display = 'contents';

           document.getElementById('smr-ali').scrollIntoView({behavior: 'smooth'});
       }

    else if (input.includes("خالد الحيالي")) { 
                 resultsContainer.style.display = 'grid';
                 document.getElementById('khalid-al-healy').style.display = 'contents';

                 document.getElementById('khalid-al-healy').scrollIntoView({behavior: 'smooth'});
             }

  else if (input.includes("نيمار ابن الانبار")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('naymar-abn-al-anbar').style.display = 'contents';

             document.getElementById('naymar-abn-al-anbar').scrollIntoView({behavior: 'smooth'});
         }

   else if (input.includes("ابن بابل")) { 
                 resultsContainer.style.display = 'grid';
                 document.getElementById('abn-babil').style.display = 'contents';

                 document.getElementById('abn-babil').scrollIntoView({behavior: 'smooth'});
             }

       else if (input.includes("علي رائد")) { 
            resultsContainer.style.display = 'grid';
            document.getElementById('ali-raeed').style.display = 'contents';

            document.getElementById('ali-raeed').scrollIntoView({behavior: 'smooth'});
        }

   else if (input.includes("اخلاص اكرم")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('eklakh-akram').style.display = 'contents';

               document.getElementById('eklakh-akram').scrollIntoView({behavior: 'smooth'});
           }

   else if (input.includes("وليد السبع")) { 
                      resultsContainer.style.display = 'grid';
                      document.getElementById('waleed-al-sabaa').style.display = 'contents';

                      document.getElementById('waleed-al-sabaa').scrollIntoView({behavior: 'smooth'});
                  }

  else if (input.includes("عباس العامري")) { 
             resultsContainer.style.display = 'grid';
             document.getElementById('abbas-al-amrri').style.display = 'contents';

             document.getElementById('abbas-al-amrri').scrollIntoView({behavior: 'smooth'});
         }

      else if (input.includes("علي صادق")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('ali-sadq').style.display = 'contents';

           document.getElementById('ali-sadq').scrollIntoView({behavior: 'smooth'});
       }

   else if (input.includes("علي الذهبي")) { 
                 resultsContainer.style.display = 'grid';
                 document.getElementById('ali-al-zahabi').style.display = 'contents';

                 document.getElementById('ali-al-zahabi').scrollIntoView({behavior: 'smooth'});
             }

   else if (input.includes("لينا احسان")) { 
            resultsContainer.style.display = 'grid';
            document.getElementById('lina-ihsan').style.display = 'contents';

            document.getElementById('lina-ihsan').scrollIntoView({behavior: 'smooth'});
        }

       else if (input.includes("مرام العلاق")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('mram-al-allaq').style.display = 'contents';

           document.getElementById('mram-al-allaq').scrollIntoView({behavior: 'smooth'});
       }

   else if (input.includes("علاء السعداوي")) { 
                  resultsContainer.style.display = 'grid';
                  document.getElementById('alaa-al-sadawi').style.display = 'contents';

                  document.getElementById('alaa-al-sadawi').scrollIntoView({behavior: 'smooth'});
              }

   else if (input.includes("عصام الشمري")) { 
                     resultsContainer.style.display = 'grid';
                     document.getElementById('asam-al-shmiry').style.display = 'contents';

                     document.getElementById('asam-al-shmiry').scrollIntoView({behavior: 'smooth'});
                 }

   else if (input.includes("يوسف الربيعي")) { 
            resultsContainer.style.display = 'grid';
            document.getElementById('yousif-al-robaii').style.display = 'contents';

            document.getElementById('yousif-al-robaii').scrollIntoView({behavior: 'smooth'});
        }

   else if (input.includes("محمد العنزي")) { 
           resultsContainer.style.display = 'grid';
           document.getElementById('mohamed-al-inizi').style.display = 'contents';

           document.getElementById('mohamed-al-inizi').scrollIntoView({behavior: 'smooth'});
       }

       else if (input.includes("حيدر ديوان")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('haider-dewan').style.display = 'contents';

              document.getElementById('haider-dewan').scrollIntoView({behavior: 'smooth'});
          }

      else if (input.includes("يوسف الجعفري")) { 
                 resultsContainer.style.display = 'grid';
                 document.getElementById('yousif-al-jafari').style.display = 'contents';

                 document.getElementById('yousif-al-jafari').scrollIntoView({behavior: 'smooth'});
             }

   else if (input.includes("عبد الوهاب عبد الكريم")) { 
               resultsContainer.style.display = 'grid';
               document.getElementById('abd-al-wahab-abd-al-kareem').style.display = 'contents';

               document.getElementById('abd-al-wahab-abd-al-kareem').scrollIntoView({behavior: 'smooth'});
           }

    else if (input.includes("صباح الدليمي")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('sabah-al-dlymi').style.display = 'contents';

              document.getElementById('sabah-al-dlymi').scrollIntoView({behavior: 'smooth'});
          }

    else if (input.includes("محمد الواثق")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('mohamed-al-wathiq').style.display = 'contents';

              document.getElementById('mohamed-al-wathiq').scrollIntoView({behavior: 'smooth'});
          }

        else if (input.includes("كرم عصام")) { 
              resultsContainer.style.display = 'grid';
              document.getElementById('krm-assam').style.display = 'contents';

              document.getElementById('krm-assam').scrollIntoView({behavior: 'smooth'});
          }

      else {
        alert("هذا الاستاذ غير متوفر"); // تنبيه في حال عدم مطابقة البحث
    }
}

// --- 4. وظائف سلة المشتريات ---
function addToCart(name, price) {
    // إضافة كائن جديد يحتوي على (الاسم والسعر) إلى نهاية المصفوفة cart
    cart.push({name, price});
    updateCartUI(); // استدعاء دالة تحديث الرقم الظاهر على السلة

    // تأثير بصري (تكبير الأيقونة ثم إرجاعها لحجمها الطبيعي عند الإضافة)
    const cartBtn = document.querySelector('.modern-cart');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

function updateCartUI() {
    // وضع عدد العناصر الموجودة في المصفوفة cart داخل عنصر العداد في السلة
    document.getElementById('cart-count').innerText = cart.length;
}

// --- 5. حساب الأسعار النهائية ---
function calculateTotal() {

    updateStudentNameFieldStatus();

    // جمع أسعار الملازم باستخدام reduce (تجمع السعر الحالي مع المجموع التراكمي)
    let subTotal = cart.reduce((sum, item) => sum + item.price, 0);
    let city = document.getElementById('userCity').value; // جلب المحافظة المختارة

    // تحديد سعر التوصيل بناءً على المحافظة المختارة من القائمة
    if (city === "") {
        deliveryCost = 0; // إذا لم يختار شيئاً، التوصيل صفر
    } else if (city === "بغداد") {
        deliveryCost = 5000; // سعر بغداد ثابت
    } else {
        deliveryCost = 5000; // سعر بقية المحافظات ثابت
    }

    // عرض النتائج في واجهة نافذة الطلب مع إضافة تنسيق الفواصل (10,000)
    document.getElementById('subTotal').innerText = subTotal.toLocaleString() + " د.ع";
    document.getElementById('deliveryPrice').innerText = deliveryCost.toLocaleString() + " د.ع";
    document.getElementById('totalPrice').innerText = (subTotal + deliveryCost).toLocaleString() + " د.ع";

    // إذا كان كود الخصم مفعّلاً، نعيد حساب السعر بعد الخصم تلقائياً
    if (isDiscountActive) {
        recalculateDiscountedPrice();
    }
}

// إعادة حساب السعر بعد الخصم بناءً على محتويات السلة الحالية وسعر التوصيل الحالي
function recalculateDiscountedPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const discountRow = document.getElementById('discountRow');
    const priceAfterDiscountElement = document.getElementById('priceAfterDiscount');

    // إذا فرغت السلة، نلغي الخصم تلقائياً
    if (cart.length === 0) {
        isDiscountActive = false;
        finalPriceWithDelivery = 0;
        if (totalPriceElement) totalPriceElement.classList.remove('original-price-discounted');
        if (discountRow) discountRow.style.display = 'none';
        return;
    }

    let booksOnlyTotal = cart.reduce((sum, item) => sum + parseInt(item.price), 0);
    let totalDiscount = 0;
    cart.forEach(item => {
        let price = parseInt(item.price);
        if (price < 74000) {
            totalDiscount += 500;
        } else {
            totalDiscount += 2000;
        }
    });

    finalPriceWithDelivery = (booksOnlyTotal - totalDiscount) + deliveryCost;

    if (totalPriceElement) totalPriceElement.classList.add('original-price-discounted');
    if (discountRow) discountRow.style.display = 'flex';
    if (priceAfterDiscountElement) priceAfterDiscountElement.innerText = finalPriceWithDelivery.toLocaleString() + " د.ع";
}

// --- 6. التحكم بالنافذة المنبثقة (Modal) ---
function openModal() {
    if (cart.length === 0) return alert("السلة فارغة!"); // لا تفتح النافذة إذا لم يشترِ شيئاً
    document.getElementById('orderModal').style.display = 'flex'; // إظهار النافذة في وسط الشاشة
    // تحويل أسماء الملازم من المصفوفة إلى نص واحد طويل مفصول بـ (+)
    renderCartChips();
    calculateTotal(); // تشغيل دالة الحساب للتأكد من المجموع قبل الإرسال
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none'; // إخفاء النافذة تماماً
}

function clearCart() {
    if (confirm("هل أنت متأكد من مسح السلة ؟")) {
        try {
            // 1. تفريغ مصفوفة الملازم
            cart = [];

            // تحديث الواجهة (بشرط وجود الدوال)
            if (typeof updateCartUI === "function") updateCartUI();
            if (typeof renderCartChips === "function") renderCartChips();

            // 2. مسح حقول النصوص (استخدمنا مصفوفة لضمان عدم توقف الكود)
            const inputIds = ['userPhone', 'userPhone2', 'userDist', 'discountCode'];
            inputIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });

            // 3. إعادة قائمة المحافظات
            const citySelect = document.getElementById('userCity');
            if (citySelect) citySelect.selectedIndex = 0;

            // 4. تصفير تنسيقات الخصم والأسعار
            const totalPriceElement = document.getElementById('totalPrice');
            const discountRow = document.getElementById('discountRow');

            if (totalPriceElement) {
                totalPriceElement.classList.remove('original-price-discounted');
                totalPriceElement.style.color = ""; // إرجاع اللون الأصلي
                totalPriceElement.innerText = "0 د.ع";
            }
            if (discountRow) {
                discountRow.style.display = 'none';
            }

            // 5. تصفير المتغيرات الحسابية (مع التأكد من تعريفها)
            if (typeof deliveryCost !== 'undefined') deliveryCost = 0;
            isDiscountActive = false; // إلغاء حالة الخصم عند مسح السلة

            // تصفير سعر الخصم النهائي (استخدمنا نافذة window لضمان الوصول للمتغير العالمي)
            window.finalPriceWithDelivery = 0;

            // 6. إغلاق النافذة (حاول بكل الدوال الممكنة)
            if (typeof closeModal === "function") {
                closeModal();
            } else if (typeof closeCart === "function") {
                closeCart();
            }

            // 7. تحديث السعر النهائي
            if (typeof calculateTotal === "function") calculateTotal();

            alert("تم مسح السلة بنجاح ✅");
        } catch (error) {
            console.error("حدث خطأ أثناء مسح السلة:", error);
            // حتى لو حدث خطأ، سنحاول إغلاق النافذة
            if (typeof closeModal === "function") closeModal();
        }
    }
}

// --- 8. ميزة الإنستغرام (نسخ النص بنفس صيغة الواتساب/التلكرام) ---
function openInstagram() {
    // 1. جلب العناصر والتأكد من وجودها (نفس التحققات الموجودة في sendOrder)
    const nameEl = document.getElementById('userName');
    const phoneEl = document.getElementById('userPhone');
    const phone2El = document.getElementById('userPhone2');
    const cityEl = document.getElementById('userCity');
    const distEl = document.getElementById('userDist');
    const studentNameInput = document.getElementById('studentName');

    // 2. استخراج القيم
    const phone = phoneEl ? phoneEl.value.trim() : "";
    const phone2 = phone2El ? phone2El.value.trim() : "";
    const city = cityEl ? cityEl.value : "";
    const dist = distEl ? distEl.value.trim() : "";

    // --- التحقق من حقل اسم الطالب (لو الطلب 75 ألف فأكثر) ---
    let studentName = "";
    if (studentNameInput && !studentNameInput.readOnly) {
        studentName = studentNameInput.value.trim();
        if (studentName === "") {
            alert("⚠️ يرجى كتابة اسم الطالب الرباعي أولاً لإكمال الطلب.");
            studentNameInput.focus();
            return;
        }
    }

    // 3. التحقق من الهاتف الأساسي
    if (phone.length !== 11 || !phone.startsWith("")) {
        alert("⚠️ عذراً، رقم الهاتف الأساسي يجب أن يتكون من 11 رقم ويبدأ بـ 07 حصراً.");
        if (phoneEl) phoneEl.focus();
        return;
    }

    // 4. التحقق من المحافظة والمنطقة
    if (city === "" || dist === "") {
        alert("يرجى اختيار المحافظة وكتابة المنطقة أولاً.");
        return;
    }

    // 5. تحديد السعر النهائي (مع مراعاة الخصم لو فعّال)
    let originalTotal = document.getElementById('totalPrice') ? document.getElementById('totalPrice').innerText.replace(/[^0-9]/g, '') : "0";
    let isDiscountVisible = document.getElementById('discountRow') && document.getElementById('discountRow').style.display === 'flex';
    let priceToMessage = (isDiscountVisible && typeof finalPriceWithDelivery !== 'undefined' && finalPriceWithDelivery > 0)
                         ? finalPriceWithDelivery
                         : originalTotal;

    // 6. قائمة الطلبات (نفس صيغة sendOrder)
    let itemsList = cart.map(item => `- ${item.name}`).join('\n');

    // 7. نص الرسالة (نفس صيغة sendOrder حرفياً)
    let message = `\n${itemsList}\n\n` +
                  (studentName ? `اسم الطالب الرباعي : ${studentName}\n` : "") +
                  `الهاتف الأساسي : ${phone}\n` +
                  `الهاتف الإضافي : ${phone2 || "لا يوجد"}\n` +
                  `المحافظة : ${city}\n` +
                  `المنطقة : ${dist}\n\n` +
                  `السعر النهائي : ${priceToMessage} د.ع`;

    // 8. النسخ للحافظة وفتح الإنستغرام
    navigator.clipboard.writeText(message).then(() => {
        alert("تم نسخ تفاصيل طلبك تلقائياً! ✅\nسيتم تحويلك الآن للصق الرسالة في الخاص.");
        window.open('https://www.instagram.com/mind.28i', '_blank');
    }).catch(() => {
        // في حال فشل النسخ التلقائي
        alert("لم يتمكن المتصفح من نسخ الرسالة تلقائياً. الرسالة:\n\n" + message);
        window.open('https://www.instagram.com/mind.28i', '_blank');
    });
}

function renderCartChips() {
    const container = document.getElementById('cartItemsList');
    container.innerHTML = '';

    cart.forEach((item, index) => {
        const chip = document.createElement('div');
        chip.className = 'item-chip';

        chip.innerHTML = `
        <span class="item-name-text">${item.name}</span>
        <span class="item-price-tag">${item.price.toLocaleString()} د.ع</span>
        <button class="btn-remove-chip" onclick="removeSpecificItem(${index})">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
        </button>
    `;
        container.appendChild(chip);
    });
}

function removeSpecificItem(index) {
    cart.splice(index, 1); // حذف العنصر
    updateCartUI(); // تحديث أيقونة السلة الخارجية

    if (cart.length === 0) {
        closeModal(); // إغلاق النافذة إذا السلة فرغت
    } else {
        renderCartChips(); // تحديث القائمة في النافذة
        calculateTotal(); // تحديث المجموع النهائي
    }
}

// 1. تريدهء التي ستظهر في الاقتراحات (يمكنك إضافة أي اسم تريده هنا)
// قائمة الأسماء
const teachersList = ["حيدر وليد","احمد النعيمي","محمد العبيدي","محمد قاسم","عقيل الزبيدي","خضر الظاهر","حسين الهاشمي","سجاد العبيدي","حسين محمد","هاشم الغرباوي","شمس الادب","رفل الزبيدي"
                    ,"حسن عبد الكاظم","مهند السوداني","علي السوداني","جعفر الحسني","عباس الدراجي","نور الدين","ازل سلوان","عمار السلامي","احمد النداوي","محمد النداوي","ماهر نايف","حسن فلاح","مصطفى الحافظ","سالم منصور"
                    ,"نورا الدايني","فاضل الهاشمي","حسين عبيدة","منتظر الخفاجي","مؤمل مهدي","محمد حسين","حسين حمزة","سجاد حمزة","احمد جبار الدايني","ادم ابراهيم","عليم جوهر","حيدر عبد الائمة","محمد النوفلي","علي الحطاب"
              ,"ايات العاني","نسرين البياتي","هيام الراوي","زياد الراوي","ندى جاسم","ميس وليد","محمد زياد","هشام المعموري","حمزة الجابري","نورس الموسوي","علا الصراف","مضر الجبوري","احمد فوزي","احمد حسان","احمد الجاف"
         ,"قصي النداوي","دانيار الجاف","مازن الهلالي","عمار فاضل","ساجد العكيلي","سمر علي","خالد الحيالي","نيمار ابن الانبار","ابن بابل","علي رائد","اخلاص اكرم","وليد السبع","مؤيد سليم","علي صادق","علي الذهبي","عباس العامري"
         ,"لينا احسان","مرام العلاق","علاء السعداوي","عصام الشمري","محمد علي الكناني","يوسف الربيعي","زياد ماهر","محمد العنزي","حيدر ديوان","يوسف الجعفري","عبد الوهاب عبد الكريم","محمد الواثق","صباح الدليمي","كرم عصام"];

function showSuggestions() {
    let input = document.getElementById('userInput').value.trim();    
    let box = document.getElementById('suggestions-box');

    box.innerHTML = ''; 

    if (input.length === 0) {
        box.style.display = 'none';
        return;
    }

    let filtered = teachersList.filter(name => name.includes(input));

    if (filtered.length > 0) {
        box.style.display = 'block';
        filtered.forEach(name => {
            let div = document.createElement('div');
            div.className = 'suggestion-item'; 
            div.innerText = name;
            div.onclick = function() {
                document.getElementById('userInput').value = name;
                box.style.display = 'none';
                executeSearch(); 
            };
            box.appendChild(div);
        });
    } else {
        box.style.display = 'none';
    }
}

// متغيرات عالمية لضمان عملها في كل الدوال
let finalPriceWithDelivery = 0; 

// دالة تفعيل الخصم
// دالة تفعيل الخصم (المعدلة لمنع الخصم قبل اختيار المحافظة)
function applyDiscount() {
    const citySelect = document.getElementById('userCity'); // جلب عنصر اختيار المحافظة
    const inputCodeElement = document.getElementById('discountCode'); // جلب عنصر إدخال الكود
    const coupon = "MIND"; 

    // 1. الشرط الجديد: التحقق من أن المحافظة مختارة أولاً
    if (!citySelect || citySelect.value === "") {
        alert("⚠️ يرجى اختيار المحافظة أولاً قبل محاولة تفعيل كود الخصم!");
        if (inputCodeElement) inputCodeElement.value = ""; // مسح الكود الذي كتبه المستخدم
        citySelect.focus(); // توجيه نظر المستخدم لاختيار المحافظة
        return; // التوقف عن تنفيذ باقي الدالة
    }

    // 2. إذا كانت المحافظة مختارة، نكمل العمل الطبيعي
    const inputCode = inputCodeElement.value.trim();
    const totalPriceElement = document.getElementById('totalPrice');
    const discountRow = document.getElementById('discountRow');

    if (inputCode === coupon) {
        // تفعيل الخصم وإعادة الحساب من خلال الدالة المشتركة
        isDiscountActive = true;
        recalculateDiscountedPrice();
        alert("تم تفعيل الخصم بنجاح ✅");
    } else {
        alert("كود الخصم غير صحيح ❌");
        isDiscountActive = false;
        finalPriceWithDelivery = 0;
        totalPriceElement.classList.remove('original-price-discounted');
        discountRow.style.display = 'none';
    }
}

function sendOrder(platform) {
    // 1. جلب العناصر والتأكد من وجودها
    const nameEl = document.getElementById('userName');
    const phoneEl = document.getElementById('userPhone');
    const phone2El = document.getElementById('userPhone2');
    const cityEl = document.getElementById('userCity');
    const distEl = document.getElementById('userDist');
    const studentNameInput = document.getElementById('studentName');

    // 2. استخراج القيم
    const name = nameEl ? nameEl.value.trim() : "غير محدد";
    const phone = phoneEl ? phoneEl.value.trim() : "";
    const phone2 = phone2El ? phone2El.value.trim() : "";
    const city = cityEl ? cityEl.value : "";
    const dist = distEl ? distEl.value.trim() : "";

    // --- الجزء المصلح لحقل اسم الطالب ---
    let studentName = "";
    // إذا كان الحقل موجوداً وغير مقفول (يعني الطلب 75 ألف فما فوق)
    if (studentNameInput && !studentNameInput.readOnly) {
        studentName = studentNameInput.value.trim();
        // إذا كان مفتوحاً لكنه فارغ، نمنع الإرسال
        if (studentName === "") {
            alert("⚠️ يرجى كتابة اسم الطالب الرباعي أولاً لإكمال الطلب.");
            studentNameInput.focus();
            return; // توقف هنا ولا تفتح الواتساب/تليجرام
        }
    }
    // ------------------------------------

    // 3. التحقق من الهاتف الأساسي
    if (phone.length !== 11 || !phone.startsWith("")) {
        alert("⚠️ عذراً، رقم الهاتف الأساسي يجب أن يتكون من 11 رقم ويبدأ بـ 07 حصراً.");
        if (phoneEl) phoneEl.focus();
        return;
    }

    // 4. التحقق من المحافظة والمنطقة
    if (city === "" || dist === "") {
        alert("يرجى اختيار المحافظة وكتابة المنطقة أولاً.");
        return;
    }

    // 5. تحديد السعر النهائي
    let originalTotal = document.getElementById('totalPrice') ? document.getElementById('totalPrice').innerText.replace(/[^0-9]/g, '') : "0";
    let isDiscountVisible = document.getElementById('discountRow') && document.getElementById('discountRow').style.display === 'flex';
    let priceToMessage = (isDiscountVisible && typeof finalPriceWithDelivery !== 'undefined' && finalPriceWithDelivery > 0) 
                         ? finalPriceWithDelivery 
                         : originalTotal;

    // 6. قائمة الطلبات
    let itemsList = cart.map(item => `- ${item.name}`).join('\n');

    // 7. نص الرسالة
    let message = `\n${itemsList}\n\n` +
                  (studentName ? `اسم الطالب الرباعي : ${studentName}\n` : "") +
                                    `الهاتف الأساسي : ${phone}\n` +
                  `الهاتف الإضافي : ${phone2 || "لا يوجد"}\n` +
                  `المحافظة : ${city}\n` +
                  `المنطقة : ${dist}\n\n` +
                  `السعر النهائي : ${priceToMessage} د.ع`;

    const encodedMessage = encodeURIComponent(message);

    // 8. الإرسال للمنصة المختارة
    if (platform === 'whatsapp') {
        const whatsappNumber = "9647763272728"; 
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    } else if (platform === 'telegram') {
        const telegramUser = "Mindh1"; 
        window.open(`https://t.me/${telegramUser}?text=${encodedMessage}`, '_blank');
    }
}

// دالة للتحقق من وجود منتج سعره 75 ألف أو أكثر لتفعيل حقل اسم الطالب
function updateStudentNameFieldStatus() {
    const studentNameInput = document.getElementById('studentName');
    if (!studentNameInput) return; // التأكد من وجود الحقل في HTML

    // البحث في السلة: هل يوجد منتج واحد على الأقل سعره أكبر من أو يساوي 75000؟
    const hasPremiumProduct = cart.some(item => {
        let price = parseInt(item.price) || 0;
        return price >= 75000;
    });

    if (hasPremiumProduct) {
        // إذا وجد منتج: نفتح الحقل ونغير الرسالة التوضيحية
        studentNameInput.readOnly = false;
        studentNameInput.placeholder = "يرجى كتابة اسم الطالب الرباعي هنا";
    } else {
        // إذا لم يوجد: نقفل الحقل، نفرغ النص، ونعيد الرسالة التوضيحية
        studentNameInput.readOnly = true;
        studentNameInput.value = ""; 
        studentNameInput.placeholder = "مطلوب فقط للدورات الالكترونية";
    }
}


/* ================================================================
   زر "اشترك بقناة التلكرام" — عائم في أسفل يمين الشاشة
   يفتح القناة مباشرة في تطبيق تلكرام (إن وُجد) لتجربة سلسة
   ================================================================ */
(function () {
    function injectTelegramJoinButton() {
        if (document.getElementById('tg-join-fab')) return;

        const btn = document.createElement('button');
        btn.id = 'tg-join-fab';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'اشترك بقناة التلكرام');
        btn.innerHTML = `
            <span class="tg-fab-pulse"></span>
            <span class="tg-fab-icon">
                <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <linearGradient id="tgGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#37BBFE"/>
                            <stop offset="1" stop-color="#007DBB"/>
                        </linearGradient>
                    </defs>
                    <circle cx="120" cy="120" r="120" fill="url(#tgGrad)"/>
                    <path fill="#ffffff" d="M180.5 70.3 158.4 174c-1.7 7.4-6 9.2-12.2 5.7l-33.7-24.8-16.3 15.7c-1.8 1.8-3.3 3.3-6.8 3.3l2.4-34.4 62.6-56.6c2.7-2.4-.6-3.8-4.2-1.4L73 122.3l-33.2-10.4c-7.2-2.3-7.4-7.2 1.5-10.6l129.7-50C177.1 49 182.4 52.6 180.5 70.3z"/>
                </svg>
            </span>
            <span class="tg-fab-text">اشترك بقناة التلكرام</span>
        `;

        btn.addEventListener('click', function () {
            // تجربة الفتح في تطبيق تلكرام مباشرة
            const tgAppUrl = 'tg://resolve?domain=mindlibrary_1';
            const tgWebUrl = 'https://t.me/mindlibrary_1';

            // محاولة فتح التطبيق ثم fallback للويب بعد لحظة قصيرة
            const startedAt = Date.now();
            const fallbackTimer = setTimeout(function () {
                // إذا لم ينتقل المستخدم خلال 600ms يعني التطبيق غير مثبّت
                if (Date.now() - startedAt < 1500 && document.visibilityState === 'visible') {
                    window.open(tgWebUrl, '_blank');
                }
            }, 600);

            // عند مغادرة الصفحة (التطبيق فُتح) نلغي الـ fallback
            window.addEventListener('blur', function onBlur() {
                clearTimeout(fallbackTimer);
                window.removeEventListener('blur', onBlur);
            }, { once: true });

            // محاولة الفتح
            window.location.href = tgAppUrl;
        });

        document.body.appendChild(btn);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectTelegramJoinButton);
    } else {
        injectTelegramJoinButton();
    }
})();
