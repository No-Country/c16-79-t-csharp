using AutoMapper;
using Veterinaria.Application.DTO;
using Veterinaria.Application.Dtos;
using Veterinaria.Domain.Models;
using Veterinaria.Infrastructure.Authentication;

namespace WebApi.Utilities
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<PetCreationDTO, Pet>().ForMember(d => d.Birthday, opt => opt.MapFrom(o => DateOnly.ParseExact(o.Birthday, "dd/MM/yyyy")))
                                            .ForMember(d => d.Id, o => o.Ignore())
                                            .ForMember(d => d.ClientUser, o => o.Ignore());
            CreateMap<Pet, PetDTO>().ForPath(d => d.ClientUserName, opt => opt.MapFrom(o => o.ClientUser.Name))
                                    .ForMember(d => d.Birthday, opt => opt.MapFrom(o => o.Birthday.ToString("dd/MM/yyyy")));


            CreateMap<AddressCreationDTO, Address>().ForMember(d => d.Id, o => o.Ignore())
                                                    .ForMember(d => d.ClientUser, o => o.Ignore());
            CreateMap<Address, AddressDTO>().ForPath(d => d.ClientUserName, opt => opt.MapFrom(o => o.ClientUser.Name));


            CreateMap<ApplicationUserAccount, UserAccountResponseRegisterDTO>();
            CreateMap<ApplicationUserAccount, ClientUser>().ForMember(d => d.UserAccountId, opt => opt.MapFrom(o => o.Id));
            CreateMap<ApplicationUserAccount, ClientUserDTO>().ForMember(d => d.UserAccountId, opt => opt.MapFrom(o => o.Id));
            CreateMap<ClientUser, ClientUserDTO>().ForMember(d => d.Addresses, opt => opt.MapFrom(o => o.Addresses));
            CreateMap<ClientUserDataUpdateDTO, ClientUser>().ForMember(d => d.Id, o => o.Ignore());
            CreateMap<UserAccountResponseLoginDTO, UserAccountLoginDTO>();
            CreateMap<UserAccountResponseRegisterDTO, UserAccountRegisterDTO>();
            CreateMap<Sale, SaleDto>().ForMember(d => d.Date, opt => opt.MapFrom(o => o.Date.ToString("dd/MM/yyyy")))
                                      .ForMember(d => d.Total, opt => opt.MapFrom(o => o.Total.ToString("0.00")));
            CreateMap<SaleCreateDto, Sale>();
            CreateMap<SaleUpdateDto, Sale>();
            CreateMap<Sale, SaleUpdateDto>();
            CreateMap<DetailSale, DetailSaleDto>().ForMember(dest => dest.SubTotal, opt => opt.MapFrom(src => src.CalculateSubTotal()))
                                                .ForMember(d => d.Sale, opt => opt.MapFrom(o => o.Sale))
                                                .ForMember(d => d.Product, opt => opt.MapFrom(o => o.Product));
            CreateMap<DetailSaleCreateDto, DetailSale>();
            CreateMap<DetailSaleUpdateDto, DetailSale>();
            CreateMap<DetailSale, DetailSaleUpdateDto>();
            CreateMap<Product, ProductDto>().ForMember(dest => dest.Categories, opt => opt.MapFrom(src => src.Categories));
            CreateMap<ProductCreateDto, Product>().ForMember(d => d.Id, o => o.Ignore());
            CreateMap<ProductUpdateDto, Product>().ForMember(d => d.Id, o => o.Ignore());
            CreateMap<Categorie, CategorieDto>();
        }
    }
}
